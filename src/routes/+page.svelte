<script lang="ts">
	import { getDoodadCounts } from '$lib/utils';
	import { onMount } from 'svelte';

	type Hideout = {
		hideoutString: string;
		hideoutName: string;
		isValid: boolean;
		uploadTimestampMs: number;
		doodadCounts: { [key: string]: number };
	};

	const STORAGE_KEY_HIDEOUT_PREFIX = 'PUX_HIDEOUT_MIGRATE';
	const STORAGE_KEY_CHOSEN_DOODAD_1 = 'PUX_CHOSEN_DOODAD_1';

	const parseHideout = (hideoutString: string, hideoutId: string = ''): Hideout => {
		const hideoutJson = JSON.parse(hideoutString);

		const hideout = {
			hideoutString,
			hideoutName: hideoutJson?.hideout_name || 'Invalid',
			isValid: !!hideoutJson?.hideout_name,
			uploadTimestampMs: Date.now(),
			doodadCounts: getDoodadCounts(hideoutString, true)
		};

		if (hideoutId) {
			localStorage.setItem(
				`${STORAGE_KEY_HIDEOUT_PREFIX}_${hideoutId}_STRING`.toLocaleUpperCase(),
				hideout.hideoutString
			);
			localStorage.setItem(
				`${STORAGE_KEY_HIDEOUT_PREFIX}_${hideoutId}_TIMESTAMP`.toLocaleUpperCase(),
				hideout.uploadTimestampMs.toString()
			);
		}

		return hideout;
	};

	const getHideout = (hideoutId: string): Hideout | null => {
		const hideoutString = localStorage.getItem(
			`${STORAGE_KEY_HIDEOUT_PREFIX}_${hideoutId}_STRING`.toLocaleUpperCase()
		);

		if (!hideoutString) {
			return null;
		}

		return {
			...parseHideout(hideoutString),
			uploadTimestampMs: parseInt(
				localStorage.getItem(
					`${STORAGE_KEY_HIDEOUT_PREFIX}_${hideoutId}_TIMESTAMP`.toLocaleUpperCase()
				) || '0',
				0
			)
		};
	};

	let errors: string[] = [];

	let oldHideout: Hideout | null = null;
	let newHideout: Hideout | null = null;
	let chosenDoodad = '';

	onMount(() => {
		oldHideout = getHideout('old');
		newHideout = getHideout('new');
	});
</script>

<svelte:head>
	<title>Migrate Hideout</title>
</svelte:head>

<div class="max-w-[130ch] mx-auto">
	<h1 class="mt-1">Migrate Hideout</h1>
	<p>Move all the decorations from one hideout to another.</p>
	<div class="flex flex-row justify-center mt-2">
		<div class="basis-prose">
			<div class="flex flex-row gap-2">
				<div class="flex flex-col">
					<label class="button-default inline-block cursor-pointer relative">
						Upload Old Hideout
						<input
							class="w-0 opacity-0 text-sm text-left block absolute top-0 left-0"
							type="file"
							accept=".hideout"
							on:change={async (event) => {
								errors = [];

								if (event.currentTarget.files) {
									for (const file of [...event.currentTarget.files]) {
										try {
											const tempOldHideout = await file.text();

											oldHideout = parseHideout(tempOldHideout, 'old');

											chosenDoodad = '';
											localStorage.setItem(STORAGE_KEY_CHOSEN_DOODAD_1, '');
										} catch (_e) {
											errors.push(`Error when loading ${file.name}`);
										}
									}
								}
							}}
						/>
					</label>
					{#if oldHideout}
						<div>{oldHideout.hideoutName}</div>
					{/if}
				</div>
				<div class="inline-block">
					<label class="button-default inline-block cursor-pointer relative">
						Upload New Hideout
						<input
							class="w-0 opacity-0 text-sm text-left block absolute top-0 left-0"
							type="file"
							accept=".hideout"
							on:change={async (event) => {
								errors = [];

								if (event.currentTarget.files) {
									for (const file of [...event.currentTarget.files]) {
										try {
											const tempNewHideout = await file.text();

											newHideout = parseHideout(tempNewHideout, 'new');

											chosenDoodad = '';
											localStorage.setItem(STORAGE_KEY_CHOSEN_DOODAD_1, '');
										} catch (_e) {
											errors.push(`Error when loading ${file.name}`);
										}
									}
								}
							}}
						/>
					</label>
					{#if newHideout}
						<div>{newHideout.hideoutName}</div>
					{/if}
				</div>
			</div>
			{#if !oldHideout || !newHideout}
				<p>Please upload two hideouts.</p>
			{:else}{/if}
		</div>
		<div class="basis-prose">
			<h2>Instructions</h2>
			<ol class="ml-4 list-decimal">
				<li>Export your current hideout.</li>
				<li>Switch to the hideout you want (talk to Helena).</li>
				<li>
					Put a reference decoration where somewhere in the new hideout, e.g. the Waypoint.
					<ul class="ml-4 list-disc">
						<li>
							This tool will migrate all the decorations in your old hideout so they are in the same
							place relative to this reference decoration.
						</li>
					</ul>
				</li>
				<li>Export the new hideout.</li>
				<li>
					Upload both hideouts by clicking on the "Upload Old Hideout" and "Upload New Hideout"
					buttons.
				</li>
				<li>Choose the decoration you added in step 3.</li>
				<li>
					Download your new hideout. If that doesn't work, you might have to right-click on the
					button and choose "Save As...". Be careful not to overwrite either of your original
					hideouts in case.
				</li>
				<li>Import your new hideout in Path of Exile.</li>
			</ol>
		</div>
	</div>
</div>
