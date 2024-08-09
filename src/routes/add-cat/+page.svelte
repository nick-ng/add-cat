<script lang="ts">
	import { getDoodadCounts, replaceWithSoycat } from '$lib/utils';
	import { onMount } from 'svelte';

	const STORAGE_KEY_HIDEOUT = 'PUX_ORIGINAL_HIDEOUT';
	const STORAGE_KEY_TIMESTAMP = 'PUX_UPLOAD_TIMESTAMP';
	const STORAGE_KEY_CHOSEN_DOODAD = 'PUX_CHOSEN_DOODAD';
	const STORAGE_KEY_ADJUST_X = 'PUX_ADJUST_X';
	const STORAGE_KEY_ADJUST_Y = 'PUX_ADJUST_Y';

	let errors: string[] = [];

	let originalHideout = '';
	let chosenDoodad = '';
	let uploadedTimestamp = 0;

	let adjustX = 0;
	let adjustY = 0;

	$: doodads = getDoodadCounts(originalHideout);
	$: uniqueDoodads = Object.entries(doodads).filter((a) => a[1] === 1);
	$: duplicateDoodads = Object.entries(doodads).filter((a) => a[1] > 1);
	$: hideoutWithCat = replaceWithSoycat(originalHideout, chosenDoodad, { x: adjustX, y: adjustY });
	$: uploadedDate = new Date(uploadedTimestamp);

	onMount(() => {
		const savedHideout = localStorage.getItem(STORAGE_KEY_HIDEOUT);

		if (savedHideout) {
			originalHideout = savedHideout;
			chosenDoodad = localStorage.getItem(STORAGE_KEY_CHOSEN_DOODAD) || '';
			uploadedTimestamp = parseInt(localStorage.getItem(STORAGE_KEY_TIMESTAMP) || '0', 10);
			adjustX = parseInt(localStorage.getItem(STORAGE_KEY_ADJUST_X) || '0', 10);
			adjustY = parseInt(localStorage.getItem(STORAGE_KEY_ADJUST_Y) || '0', 10);
		}
	});
</script>

<svelte:head>
	<title>Migrate Hideout</title>
</svelte:head>

<div class="max-w-[130ch] mx-auto">
	<h1 class="mt-1">Add Cat</h1>
	<p>This tool will add a "soycat" to your hideout. It will be "centered" on a decoration.</p>
	<p>
		Original by SoyCatMod and Alexballe: <a
			href="https://hideoutshowcase.com/hideout/show/5619/title/Jailed%20SoyCat%20#FreeTheCat"
			target="_blank">"Jailed SoyCat #FreeTheCat"</a
		>
	</p>
	<div class="flex flex-row justify-center mt-2">
		<div class="basis-prose">
			<div>
				<label class="button-default inline-block cursor-pointer relative">
					Upload Hideout
					<input
						class="w-0 opacity-0 text-sm text-left block absolute top-0 left-0"
						type="file"
						accept=".hideout"
						on:change={async (event) => {
							errors = [];

							if (event.currentTarget.files) {
								for (const file of [...event.currentTarget.files]) {
									try {
										originalHideout = await file.text();
										chosenDoodad = '';
										uploadedTimestamp = Date.now();
										adjustX = 0;
										adjustY = 0;

										localStorage.setItem(STORAGE_KEY_HIDEOUT, originalHideout);
										localStorage.setItem(STORAGE_KEY_CHOSEN_DOODAD, '');
										localStorage.setItem(STORAGE_KEY_TIMESTAMP, uploadedTimestamp.toString(10));
										localStorage.setItem(STORAGE_KEY_ADJUST_X, adjustX.toString(10));
										localStorage.setItem(STORAGE_KEY_ADJUST_Y, adjustY.toString(10));
									} catch (e) {
										errors.push(`Error when loading ${file.name}`);
										if (e instanceof Error) {
											errors.push(e.message);
										}
									}
								}
							}
						}}
					/>
				</label>
			</div>
			{#if !originalHideout}
				<p>Please upload a hideout.</p>
			{:else if uniqueDoodads.length === 0}
				<p>
					Please upload a different hideout. The uploaded hideout doesn't have any suitable
					decorations to replace.
				</p>
				<p>
					Add a decoration where you want the cat in-game, re-export, and re-upload your hideout.
				</p>
				{#if duplicateDoodads.length > 0}
					<p>Your hideout only has these non-unique decorations:</p>
					<table>
						<thead>
							<tr>
								<th class="px-1 border-default text-left">Name</th>
								<th class="px-1 border-default text-right">Count</th>
							</tr>
						</thead>
						<tbody>
							{#each duplicateDoodads as doodad}
								<tr class="odd-rows">
									<td class="px-1 border-default">{doodad[0]}</td>
									<td class="px-1 border-default text-right">{doodad[1]}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				{/if}
			{:else}
				<h3 class="mt-1">Uploaded at {uploadedDate.toLocaleString()}</h3>
				<p>Choose Decoration to Replace</p>
				<div>
					<ul class="inline-block">
						{#each uniqueDoodads as doodad}
							<li class="even-rows">
								<label
									><input
										type="radio"
										bind:group={chosenDoodad}
										on:click={() => {
											localStorage.setItem(STORAGE_KEY_CHOSEN_DOODAD, doodad[0]);
										}}
										name="targetDoodad"
										value={doodad[0]}
									/>&nbsp;{doodad[0]}</label
								>
							</li>
						{/each}
					</ul>
					{#if duplicateDoodads.length > 0}
						<details>
							<summary>Duplicate Decorations</summary>
							<p>You can't choose these because there are multiple of them:</p>
							<table>
								<thead>
									<tr>
										<th class="px-1 border-default text-left">Name</th>
										<th class="px-1 border-default text-right">Count</th>
									</tr>
								</thead>
								<tbody>
									{#each duplicateDoodads as doodad}
										<tr class="odd-rows">
											<td class="px-1 border-default">{doodad[0]}</td>
											<td class="px-1 border-default text-right">{doodad[1]}</td>
										</tr>
									{/each}
								</tbody>
							</table>
						</details>
					{/if}
				</div>
				<div>
					<h3>Adjust</h3>
					<table>
						<tbody>
							<tr>
								<td
									><button
										class="p0 flex flex-row justify-center items-center w-7 h-7"
										on:click={() => {
											adjustY = adjustY + 1;
										}}>↖️</button
									></td
								>
								<td
									><button class="p0 flex flex-row justify-center items-center w-7 h-7" disabled
										>⬆️</button
									></td
								>
								<td
									><button
										class="p0 flex flex-row justify-center items-center w-7 h-7"
										on:click={() => {
											adjustX = adjustX + 1;
										}}>↗️</button
									></td
								>
							</tr>
							<tr>
								<td
									><button class="p0 flex flex-row justify-center items-center w-7 h-7" disabled
										>⬅️</button
									></td
								>
								<td
									><button
										class="p0 flex flex-row justify-center items-center w-7 h-7"
										on:click={() => {
											adjustX = 0;
											adjustY = 0;
										}}>🔄</button
									></td
								>
								<td
									><button class="p0 flex flex-row justify-center items-center w-7 h-7" disabled
										>➡️</button
									></td
								>
							</tr>
							<tr>
								<td
									><button
										class="p0 flex flex-row justify-center items-center w-7 h-7"
										on:click={() => {
											adjustX = adjustX - 1;
										}}>↙️</button
									></td
								>
								<td
									><button class="p0 flex flex-row justify-center items-center w-7 h-7" disabled
										>⬇️</button
									></td
								>
								<td
									><button
										class="p0 flex flex-row justify-center items-center w-7 h-7"
										on:click={() => {
											adjustY = adjustY - 1;
										}}>↘️</button
									></td
								>
							</tr>
						</tbody>
					</table>
					<table class="my-2">
						<tbody>
							<tr>
								<td>X</td>
								<td><input class="w-16 text-right" type="number" bind:value={adjustX} /></td>
							</tr>
							<tr>
								<td>Y</td>
								<td><input class="w-16 text-right" type="number" bind:value={adjustY} /></td>
							</tr>
						</tbody>
					</table>
				</div>
			{/if}

			{#if chosenDoodad && uniqueDoodads.length > 0}
				<div>
					<a
						class="button-default no-underline opaque inline-block"
						href={`data:text/plain;charset=utf-8,${hideoutWithCat}`}
						download={`with-cat_x${adjustX}_y${adjustY}.hideout`}>Download (Right-Click, Save As)</a
					>
				</div>
			{/if}
		</div>
		<div class="basis-prose">
			<h2>Instructions</h2>
			<ol class="ml-4 list-decimal">
				<li>
					Go into your hideout and put a <em>unique</em> decoration where you want the cat.
				</li>
				<li>Export your hideout.</li>
				<li>Upload your hideout by clicking on the "Upload Hideout" button.</li>
				<li>
					Choose the decoration you added in step 1. This decoration will be replaced by a "soycat"
				</li>
				<li>
					Download your new hideout. If that doesn't work, you might have to right-click on the
					button and choose "Save As...". Don't overwrite your original hideout in case you don't
					get what you want.
				</li>
				<li>
					Import your new hideout in Path of Exile. If the cat isn't in the correct position, you
					can move it by clicking on the adjustment buttons. You'll need to download and import your
					hideout to see if the adjustments were enough.
				</li>
			</ol>
			<h2>Notes</h2>
			<ul class="ml-4 list-disc">
				<li>
					You can only add one cat at a time. To save time adding more than one:
					<ol class="ml-4 list-decimal">
						<li>Add multiple different decorations to your hideout</li>
						<li>Upload and replace one of them with a cat</li>
						<li>Upload the new hideout and replace the next one with a cat</li>
					</ol>
				</li>
			</ul>
			<h2>To Do</h2>
			<ul class="ml-4 list-disc">
				<li>Figure out what x and y to use when adjusting vertically/horizontally</li>
				<li>Add any custom decoration</li>
				<li>Add multiple cats at once</li>
			</ul>
		</div>
	</div>
</div>
