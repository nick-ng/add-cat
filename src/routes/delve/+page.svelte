<script lang="ts">
	import type { DelveSessions, DelveRow } from '$lib/types';

	import {
		getDelveSessionData,
		getDelveRows,
		saveDelveSessionData,
		saveDelveRows
	} from './persistence.svelte';
	import { onMount } from 'svelte';
	import Row from './row.svelte';

	let sessions = $state<DelveSessions['sessions']>([]);
	let currentSession = $state<DelveSessions['currentSession']>(null);
	let delveRows = $state<DelveRow[]>([]);

	onMount(async () => {
		const sessionData = await getDelveSessionData();
		sessions = sessionData.sessions;
		currentSession = sessionData.currentSession || sessions[0]?.id || null;

		if (currentSession) {
			delveRows = await getDelveRows(currentSession);
		}
	});
</script>

<div class="m-2">
	<h1>Delve</h1>
	<div>
		{#if currentSession}
			<select
				class="px-1 py-[0.2rem]"
				bind:value={
					() => currentSession,
					(newValue) => {
						currentSession = newValue;

						saveDelveSessionData({
							currentSession,
							sessions
						});
					}
				}
			>
				{#each sessions as session (session.id)}
					<option value={session.id}>{session.name}</option>
				{/each}
			</select>
			<button
				type="button"
				onclick={() => {
					const temp = sessions.find((s) => s.id === currentSession);
					if (!confirm(`Really delete session ${temp?.name}?`)) {
						return;
					}

					sessions = sessions.filter((s) => s.id !== currentSession);
					currentSession = sessions[0]?.id || null;

					saveDelveSessionData({
						currentSession,
						sessions
					});
				}}>Delete</button
			>
		{:else}
			<span>Create a session</span>
		{/if}
		<button
			type="button"
			onclick={() => {
				const sessionName = prompt('Enter a session name');
				if (typeof sessionName !== 'string' || sessionName.length === 0) {
					return;
				}

				const sessionId = `delve-${Date.now()}`;

				currentSession = sessionId;
				sessions.push({
					id: sessionId,
					name: sessionName
				});

				saveDelveSessionData({
					currentSession,
					sessions
				});
			}}>New</button
		>
	</div>
	<table class="delverows mt-1">
		<thead>
			<tr>
				<th class="border border-solid border-gray-500" colspan="5">Starting</th><th
					class="border border-solid border-gray-500"
					colspan="5">End</th
				><th class="" colspan="2">
					<button
						class="w-full mb-0.5 ml-0.5 border-white"
						type="button"
						onclick={() => {
							delveRows.unshift({
								id: `delve-${Date.now()}`,
								goal: 'Down',
								azuritePerC: 0,
								startingSulphite: Math.max(0, ...delveRows.map((d) => d.startingSulphite)),
								startingAzurite: 0,
								startingDepth: Math.max(0, ...delveRows.map((d) => d.endingDepth)),
								startingFossilTabC: 0,
								startingTimestampMs: Date.now(),
								endingSulphite: 0,
								endingAzurite: 0,
								endingDepth: 0,
								endingFossilTabC: 0,
								endingTimestampMs: -1
							});

							if (currentSession) {
								saveDelveRows(currentSession, delveRows);
							}
						}}>Add Row</button
					>
				</th>
			</tr>
			<tr>
				<th class="text-right border border-solid border-gray-500 px-1">Sulphite</th>
				<th class="text-right border border-solid border-gray-500 px-1">Azurite</th>
				<th class="text-right border border-solid border-gray-500 px-1">Depth</th>
				<th class="text-right border border-solid border-gray-500 px-1">Fossil Tab</th>
				<th class="text-center border border-solid border-gray-500 px-1">Time</th>
				<th class="text-right border border-solid border-gray-500 px-1">Sulphite</th>
				<th class="text-right border border-solid border-gray-500 px-1">Azurite</th>
				<th class="text-right border border-solid border-gray-500 px-1">Depth</th>
				<th class="text-right border border-solid border-gray-500 px-1">Fossil Tab</th>
				<th class="text-center border border-solid border-gray-500 px-1">Time</th>
				<th class="border border-solid border-gray-500 px-1">Goal</th>
				<th class="text-right border border-solid border-gray-500 px-1">Azu/c</th>
			</tr>
		</thead>
		<tbody>
			{#each delveRows as delveRow (delveRow.startingTimestampMs)}
				<tr>
					<Row
						{delveRow}
						onChange={(newRow) => {
							const rowIndex = delveRows.findIndex((r) => r.id === newRow.id);
							delveRows[rowIndex] = newRow;

							if (currentSession) {
								saveDelveRows(currentSession, delveRows);
							}
						}}
					/>
				</tr>
			{/each}
		</tbody>
	</table>
	<details>
		<summary> Debug </summary>
		<pre>{JSON.stringify({ sessions, currentSession, delveRows }, null, 2)}</pre>
	</details>
</div>
