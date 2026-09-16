<script lang="ts">
	import type { DelveRow } from '$lib/types';

	type Props = { delveRow: DelveRow; onChange: (newDelveRow: DelveRow) => Promise<void> | void };

	const { delveRow, onChange }: Props = $props();

	let rowData = $state({ ...delveRow });
	let timeoutId: ReturnType<typeof setTimeout> | null = $state(null);

	const handleChange = (
		newData: DelveRow,
		previousTimeoutId: ReturnType<typeof setTimeout> | null
	) => {
		if (typeof previousTimeoutId === 'number') {
			clearTimeout(previousTimeoutId);
		}

		return setTimeout(() => {
			onChange(newData);
		}, 300);
	};
</script>

<td class="border border-solid border-gray-500">
	<input
		class="px-1 text-right w-24"
		type="number"
		bind:value={
			() => rowData.startingSulphite,
			(newValue) => {
				rowData.startingSulphite = newValue;
				timeoutId = handleChange(rowData, timeoutId);
			}
		}
	/>
</td>
<td class="border border-solid border-gray-500">
	<input
		class="px-1 text-right w-24"
		type="number"
		bind:value={
			() => rowData.startingAzurite,
			(newValue) => {
				rowData.startingAzurite = newValue;
				timeoutId = handleChange(rowData, timeoutId);
			}
		}
	/>
</td>
<td class="border border-solid border-gray-500">
	<input
		class="px-1 text-right w-24"
		type="number"
		bind:value={
			() => rowData.startingDepth,
			(newValue) => {
				rowData.startingDepth = newValue;
				timeoutId = handleChange(rowData, timeoutId);
			}
		}
	/>
</td>
<td class="border border-solid border-gray-500">
	<input
		class="px-1 text-right w-24"
		type="number"
		bind:value={
			() => rowData.startingFossilTabC,
			(newValue) => {
				rowData.startingFossilTabC = newValue;
				timeoutId = handleChange(rowData, timeoutId);
			}
		}
	/>
</td>
<td class="border border-solid border-gray-500 text-center">
	{#if rowData.startingTimestampMs < 0}
		<button
			onclick={() => {
				rowData.startingTimestampMs = Date.now();
				timeoutId = handleChange(rowData, timeoutId);
			}}>Now</button
		>
	{:else}
		<input
			class="text-right"
			type="datetime-local"
			bind:value={
				() => {
					const d = new Date(rowData.startingTimestampMs);

					const dateString = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
					const timeString = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;

					return `${dateString}T${timeString}`;
				},
				(newValue) => {
					const d = new Date(newValue);
					rowData.startingTimestampMs = d.valueOf();
					timeoutId = handleChange(rowData, timeoutId);
				}
			}
		/>
	{/if}
</td>
<td class="border border-solid border-gray-500">
	<input
		class="px-1 text-right w-24"
		type="number"
		bind:value={
			() => rowData.endingSulphite,
			(newValue) => {
				rowData.endingSulphite = newValue;
				timeoutId = handleChange(rowData, timeoutId);
			}
		}
	/>
</td>
<td class="border border-solid border-gray-500">
	<input
		class="px-1 text-right w-24"
		type="number"
		bind:value={
			() => rowData.endingAzurite,
			(newValue) => {
				rowData.endingAzurite = newValue;
				timeoutId = handleChange(rowData, timeoutId);
			}
		}
	/>
</td>
<td class="border border-solid border-gray-500">
	<input
		class="px-1 text-right w-24"
		type="number"
		bind:value={
			() => rowData.endingDepth,
			(newValue) => {
				rowData.endingDepth = newValue;
				timeoutId = handleChange(rowData, timeoutId);
			}
		}
	/>
</td>
<td class="border border-solid border-gray-500">
	<input
		class="px-1 text-right w-24"
		type="number"
		bind:value={
			() => rowData.endingFossilTabC,
			(newValue) => {
				rowData.endingFossilTabC = newValue;
				timeoutId = handleChange(rowData, timeoutId);
			}
		}
	/>
</td>
<td class="border border-solid border-gray-500 text-center">
	{#if rowData.endingTimestampMs < 0}
		<button
			onclick={() => {
				rowData.endingTimestampMs = Date.now();
				timeoutId = handleChange(rowData, timeoutId);
			}}>Now</button
		>
	{:else}
		<input
			class="text-right"
			type="datetime-local"
			bind:value={
				() => {
					const d = new Date(rowData.endingTimestampMs);

					const dateString = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
					const timeString = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;

					return `${dateString}T${timeString}`;
				},
				(newValue) => {
					const d = new Date(newValue);
					rowData.endingTimestampMs = d.valueOf();
					timeoutId = handleChange(rowData, timeoutId);
				}
			}
		/>
	{/if}
</td>
<td class="border border-solid border-gray-500">
	<select
		class="px-1 py-[0.2rem]"
		bind:value={
			() => rowData.goal,
			(newValue) => {
				rowData.goal = newValue;
				timeoutId = handleChange(rowData, timeoutId);
			}
		}
	>
		<option value="Down">Down</option>
		<option value="Side">Side</option>
	</select>
</td>
<td class="border border-solid border-gray-500">
	<input
		class="px-1 text-right w-24"
		type="number"
		bind:value={
			() => rowData.azuritePerC,
			(newValue) => {
				rowData.azuritePerC = newValue;
				timeoutId = handleChange(rowData, timeoutId);
			}
		}
	/>
</td>
<td class="border border-solid border-gray-500 text-right">
	{#if rowData.startingTimestampMs > 0 && rowData.endingTimestampMs > 0}{/if}
</td>

<style>
	input[type='number'] {
		appearance: textfield;
	}
</style>
