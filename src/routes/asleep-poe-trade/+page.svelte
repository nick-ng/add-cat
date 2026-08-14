<script lang="ts">
	import { importItems, importStats } from '$lib/awakened-poe-utils';

	import ItemParser from './item-parser.svelte';

	let statsNdjson = $state<FileList | null>(null);
	let itemsNdjson = $state<FileList | null>(null);
</script>

<svelte:head>
	<title>Asleep PoE Trade</title>
</svelte:head>

<div class="mx-2">
	<div class="my-2 flex flex-row items-start">
		<h2>Item Parser</h2>
		<div class="grow"></div>
		<div class="relative">
			<div class="absolute right-0 top-0">
				<details class="w-[280px]">
					<summary>Import Data</summary>
					<div class="border border-gray-500 p-1 flex flex-col gap-1">
						<label for="stats-ndjson-input">Import stats.ndjson:</label>
						<input
							id="stats-ndjson-input"
							class="button-default block w-full"
							type="file"
							accept=".ndjson"
							bind:files={statsNdjson}
						/>
						<button
							disabled={!statsNdjson}
							onclick={async () => {
								if (statsNdjson?.length !== 1) {
									console.error('unexpected number of files');
									return;
								}

								const statsFileString = await statsNdjson[0].text();
								const result = await importStats(statsFileString);
								console.info(
									`Imported ${result.matcherCount} matchers, and ${result.statCount} stats at ${result.importedAt}`
								);
							}}>Import</button
						>
						<hr />
						<label for="items-ndjson-input">Import items.ndjson:</label>
						<input
							id="items-ndjson-input"
							class="button-default block w-full"
							type="file"
							accept=".ndjson"
							bind:files={itemsNdjson}
						/>
						<button
							disabled={!itemsNdjson}
							onclick={async () => {
								if (itemsNdjson?.length !== 1) {
									console.error('unexpected number of files');
									return;
								}

								const itemsFileString = await itemsNdjson[0].text();
								const result = await importItems(itemsFileString);
								console.info(
									`Imported ${result.baseTypeCount} base types, ${result.areaCount} areas, and ${result.discriminatorCount} discriminators at ${result.importedAt}`
								);
							}}>Import</button
						>
					</div>
				</details>
			</div>
		</div>
	</div>
	<p class="max-w-prose mb-2">
		The item parser and URL generator were distilled from <a
			href="https://snosme.github.io/awakened-poe-trade/"
			target="_blank">Awakened PoE Trade</a
		>. You should use it instead of this since it provides a much better experience.
	</p>
	<div class="flex flex-row gap-2">
		<ItemParser />
		<ItemParser />
		<ItemParser />
	</div>
</div>
