<script lang="ts">
	import { getDoodads, soycat } from '$lib/utils';

	let errors: string[] = [];

	let originalHideout = '';
	let chosenDoodad = '';

	$: doodads = getDoodads(originalHideout);
	$: uniqueDoodads = Object.entries(doodads).filter((a) => a[1] === 1);
	$: duplicateDoodads = Object.entries(doodads).filter((a) => a[1] > 1);
	$: regexString = `"${chosenDoodad}"\s?:\s*\{.+?\}`;
	$: hideoutWithCat = originalHideout
		.replaceAll(/\s+/g, ' ')
		.replace(new RegExp(`"${chosenDoodad}"\\s?:\\s*\\{.+?\\}`), soycat);
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

										console.log('originalHideout', originalHideout);
									} catch (_e) {
										errors.push(`Error when loading ${file.name}`);
									}
								}
							}
						}}
					/>
				</label>
			</div>

			{#if uniqueDoodads.length === 0}
				<p>Please upload a hideout.</p>
			{:else}
				<div>
					<ul class="inline-block">
						{#each uniqueDoodads as doodad}
							<li class="even-rows">
								<label
									><input
										type="radio"
										bind:group={chosenDoodad}
										name="targetDoodad"
										value={doodad[0]}
									/>&nbsp;{doodad[0]}</label
								>
							</li>
						{/each}
					</ul>
				</div>
				{#if chosenDoodad}
					<div>
						<a
							class="button-default no-underline opaque inline-block"
							href={`data:text/plain;charset=utf-8,${hideoutWithCat}`}
							download="with-cat.hideout">Download (Right-Click, Save As)</a
						>
					</div>
				{/if}
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
		</div>
	</div>
	<div>{regexString}</div>
</div>
