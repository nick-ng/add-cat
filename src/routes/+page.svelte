<script lang="ts">
	import { getDoodads, replaceWithSoycat } from '$lib/utils';
	import { onMount } from 'svelte';

	const STORAGE_KEY_HIDEOUT = 'PUX_ORIGINAL_HIDEOUT';
	const STORAGE_KEY_TIMESTAMP = 'PUX_UPLOAD_TIMESTAMP';
	const STORAGE_KEY_CHOSEN_DOODAD = 'PUX_CHOSEN_DOODAD';

	let errors: string[] = [];

	let originalHideout = '';
	let chosenDoodad = '';
	let uploadedTimestamp = 0;

	let adjustX = 0;
	let adjustY = 0;

	$: doodads = getDoodads(originalHideout);
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
		}
	});
</script>

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

										localStorage.setItem(STORAGE_KEY_HIDEOUT, originalHideout);
										localStorage.setItem(STORAGE_KEY_CHOSEN_DOODAD, '');
										localStorage.setItem(STORAGE_KEY_TIMESTAMP, Date.now().toString(10));
									} catch (_e) {
										errors.push(`Error when loading ${file.name}`);
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
			{#if duplicateDoodads.length > 0}
				<details>
					<summary>Duplicate Decorations</summary>
					<p>You have multiple of each of these:</p>
					<ul>
						{#each duplicateDoodads as doodad}
							<li class="even-rows">
								{doodad[0]}: {doodad[1]}
							</li>
						{/each}
					</ul>
				</details>
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
					Download your new hideout by clicking on the "Download (Right-Click, Save As)" button. If
					that doesn't work, you might have to right-click on the button and choose "Save As...".
					Don't overwrite your original hideout in case the the you don't get what you want.
				</li>
				<li>
					Import your new hideout. If the cat isn't in the correct position, you can move it by
					clicking on the arrow buttons.
				</li>
			</ol>
			<h2>To Do</h2>
			<ol class="ml-4 list-disc">
				<li>Figure out what x and y to use when adjusting vertically/horizontally</li>
				<li>Add any custom decoration</li>
			</ol>
		</div>
	</div>
</div>
