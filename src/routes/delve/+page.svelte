<script lang="ts">
	import type { DelveSessions } from '$lib/types';
	import type { PageProps } from './+page';

	import localforage from 'localforage';
	import { SESSIONS_STORE_KEY } from './constants';

	let { data }: PageProps = $props();

	let sessions = $state(data.sessionsData.sessions);
	let currentSession = $state(data.sessionsData.currentSession || sessions[0]?.id);

	const saveSessionsData = async (newDelveSessions: DelveSessions) => {
		return localforage.setItem(SESSIONS_STORE_KEY, JSON.stringify(newDelveSessions));
	};
	const createSession = async () => {};
</script>

<div class="w-prose2 m-auto my-2">
	<h1>Delve</h1>
	<div>
		{#if currentSession}
			<select
				bind:value={
					() => currentSession,
					(newValue) => {
						currentSession = newValue;

						saveSessionsData({
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
			}}>New</button
		>
	</div>
	<p>Coming soon</p>
	<details>
		<summary> Debug </summary>
		<pre>{JSON.stringify(data, null, 2)}</pre>
	</details>
</div>
