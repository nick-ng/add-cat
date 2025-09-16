<script lang="ts">
	import { ctrlCStore, getDefault } from '$lib/stores/ctrl-c';
	import { onMount } from 'svelte';

	let selectedGroupKey = $state(getDefault($ctrlCStore));
	let newString = $state('');
	let newComment = $state('');
	let editingString = $state('');

	$effect(() => {
		$ctrlCStore.updatedGroup = selectedGroupKey;
	});

	onMount(() => {
		const keypressHandler = (event: KeyboardEvent) => {
			if (!event.altKey || !event.ctrlKey) {
				return;
			}

			const stringKey = $ctrlCStore.groups[selectedGroupKey].favourites[event.key];
			if (!stringKey) {
				return;
			}

			const aaaa = $ctrlCStore.groups[selectedGroupKey].strings[stringKey];

			if (navigator?.clipboard) {
				navigator.clipboard.writeText(aaaa.history[0]);
			}
		};

		document.addEventListener('keyup', keypressHandler);

		return () => {
			document.removeEventListener('keyup', keypressHandler);
		};
	});
</script>

<svelte:head>
	<title>PuxSearchStrings</title>
</svelte:head>

<div class="container">
	<div class="controls">
		<select bind:value={selectedGroupKey}>
			{#each Object.values($ctrlCStore.groups) as ctrlCSet (ctrlCSet.key)}
				<option value={ctrlCSet.key}>{ctrlCSet.name}</option>
			{/each}
		</select>
		<button
			type="button"
			onclick={() => {
				let groupName = prompt('Enter set name');
				if (!groupName) {
					return;
				}

				groupName = groupName.toLocaleLowerCase().replaceAll(/[^a-z0-9_\- ]/g, '');
				const setKey = `s${Date.now()}`;
				if (!$ctrlCStore.groups[groupName]) {
					$ctrlCStore.groups[groupName] = {
						name: groupName,
						key: setKey,
						defaultAt: 0,
						favourites: {},
						refreshMs: 1000 * 60 * 60 * 24,
						strings: {}
					};
				}

				selectedGroupKey = setKey;
			}}>New Set</button
		>
		<div style="flex-grow: 1;"></div>
		<button
			type="button"
			onclick={() => {
				alert('coming soon');
			}}>Import</button
		>
	</div>
	<div class="main">
		<h2>{$ctrlCStore.groups[selectedGroupKey].name}</h2>
		<h3>Favourites</h3>
		<p>Press <code>CTRL + ALT + #</code> to copy the string to clipboard.</p>
		<table class="copy-table">
			<tbody>
				{#each [1, 2, 3, 4, 5] as index (index)}
					<tr>
						<td style="text-align:right;">{index}</td>
						<td
							><select bind:value={$ctrlCStore.groups[selectedGroupKey].favourites[`${index}`]}>
								<option value="">Choose a string</option>
								{#each Object.keys($ctrlCStore.groups[selectedGroupKey].strings) as copyStringKey (copyStringKey)}
									<option value={copyStringKey}
										>{$ctrlCStore.groups[selectedGroupKey].strings[copyStringKey]
											.history[0]}</option
									>
								{/each}</select
							>
						</td>
						<td style="text-align:right;padding-left:8px;">{index + 5}</td>
						<td
							><select bind:value={$ctrlCStore.groups[selectedGroupKey].favourites[`${index + 5}`]}>
								<option value="">Choose a string</option>
								{#each Object.keys($ctrlCStore.groups[selectedGroupKey].strings) as copyStringKey (copyStringKey)}
									<option value={copyStringKey}
										>{$ctrlCStore.groups[selectedGroupKey].strings[copyStringKey]
											.history[0]}</option
									>
								{/each}</select
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
		<div>
			<details>
				<summary>Add String</summary>
				<form
					onsubmit={(e) => {
						e.preventDefault();

						const stringKey = `c${Date.now()}`;
						$ctrlCStore.groups[selectedGroupKey].strings[stringKey] = {
							history: [newString],
							comment: newComment
						};

						newString = '';
						newComment = '';
						editingString = '';
					}}
				>
					<label>String <input type="text" bind:value={newString} /></label>
					<button type="submit">Add</button>
				</form>
			</details>
		</div>
		<table class="copy-table">
			<tbody>
				{#each Object.keys($ctrlCStore.groups[selectedGroupKey].strings) as copyStringKey (copyStringKey)}
					<tr>
						<td
							><button
								type="button"
								onclick={() => {
									if (navigator?.clipboard) {
										navigator.clipboard.writeText(
											$ctrlCStore.groups[selectedGroupKey].strings[copyStringKey].history[0]
										);
									}
								}}>Copy</button
							></td
						>
						<td>{$ctrlCStore.groups[selectedGroupKey].strings[copyStringKey].history[0]}</td>
						<td class="inline"
							><button
								type="button"
								onclick={() => {
									editingString = copyStringKey;
									newString =
										$ctrlCStore.groups[selectedGroupKey].strings[copyStringKey].history[0];
								}}>Edit</button
							>
							{#if editingString === copyStringKey}<form
									onsubmit={(e) => {
										e.preventDefault();

										$ctrlCStore.groups[selectedGroupKey].strings[copyStringKey].history[0] =
											newString;

										editingString = '';
									}}
								>
									<input bind:value={newString} /> <button>Done</button>
								</form>{/if}</td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	summary,
	button {
		cursor: pointer;
	}

	.container {
		font-family: sans-serif;
	}

	.controls {
		display: flex;
		flex-direction: row;
		gap: 5px;

		select {
			text-transform: capitalize;
		}
	}

	.copy-table {
		td {
			padding: 5px 2px;
		}
	}

	.main {
		h2 {
			text-transform: capitalize;
		}
	}

	.inline * {
		display: inline;
	}
</style>
