<script lang="ts">
	import { parseItemString, generateSearchUrl } from '$lib/awakened-poe-utils';
	let itemString = $state('');

	let item = $derived(parseItemString(itemString));
</script>

<div>
	<p>Paste item text here</p>
	<textarea class="bg-color-transparent block mb-2" bind:value={itemString}></textarea>
	{#if item}
		<div>
			<div class="font-bold">
				{item.name}
			</div>
			<div>
				{item.baseType}
			</div>
			{#if typeof item?.properties.dps === 'number'}
				<div>
					DPS: {item.properties.dps}
				</div>
				<div>
					pDPS: {item.properties.pdps}
				</div>
			{/if}
		</div>
		<div>
			{#await generateSearchUrl(item, 'Allflame')}
				<span>Loading...</span>
			{:then searchUrl}
				<a href={searchUrl} target="_blank">Search</a>
			{:catch error}
				<span>Couldn't get search url because {error}</span>
			{/await}
			<details class="my-2">
				<summary>Debug</summary>
				<pre>
					{JSON.stringify(item, null, 2)}
					</pre>
			</details>
		</div>
	{/if}
</div>
