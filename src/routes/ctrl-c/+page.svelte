<script lang="ts">
	import { onMount } from 'svelte';
	import { ctrlCStore, getDefault, importJsonString } from '$lib/stores/ctrl-c';
	import { requestPersistence } from '$lib/utils';

	let selectedGroupKey = $state(getDefault($ctrlCStore));
	let newString = $state('');
	let newComment = $state('');
	let editingString = $state('');
	let editingComment = $state('');
	let newName = $state('');
	let editingName = $state(false);
	let isImporting = $state(false);

	let jsonString = $state('');

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

<div class="m-2">
	<div class="relative flex flex-row gap-1">
		<select class="capitalize button-default" bind:value={selectedGroupKey}>
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
				isImporting = !isImporting;
				jsonString = '';
			}}>Import</button
		>
		<a
			class="button-default no-underline text-white"
			href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify($ctrlCStore.groups[selectedGroupKey]))}`}
			>Export</a
		>
		{#if isImporting}
			<div class="importer">
				Paste Import String
				<textarea bind:value={jsonString}></textarea>
				<button
					type="button"
					onclick={() => {
						importJsonString(jsonString);
						jsonString = '';
						isImporting = false;
					}}>Import from String</button
				>
			</div>
		{/if}
	</div>
	<div>
		<ul>
			<li><a href="https://poe.re" target="_blank">poe.re</a></li>
		</ul>
	</div>
	<div>
		<div class="flex flex-row items-center my-2 gap-2">
			<h2 class="capitalize">{$ctrlCStore.groups[selectedGroupKey].name}</h2>
			<button
				type="button"
				onclick={() => {
					editingName = true;
					newName = $ctrlCStore.groups[selectedGroupKey].name;
				}}>Edit</button
			>
			{#if editingName}
				<form
					class="inline-block"
					onsubmit={async (e) => {
						e.preventDefault();

						await requestPersistence();

						$ctrlCStore.groups[selectedGroupKey].name = newName;

						editingName = false;
					}}
				>
					<input class="button-default" bind:value={newName} /> <button>Done</button>
				</form>
			{/if}
		</div>
		<div>
			<details class="my-1">
				<summary>Add String</summary>
				<form
					onsubmit={async (e) => {
						e.preventDefault();

						await requestPersistence();

						const stringKey = `c${Date.now()}`;
						$ctrlCStore.groups[selectedGroupKey].strings[stringKey] = {
							history: [newString],
							comment: newComment
						};

						newString = '';
						newComment = '';
						editingString = '';
						editingComment = '';
					}}
				>
					<label>Comment <input class="button-default" type="text" bind:value={newComment} /></label
					>
					<label>String <input class="button-default" type="text" bind:value={newString} /></label>
					<button type="submit">Add</button>
				</form>
			</details>
		</div>
		<table class="border-separate border-spacing-y-2 border-spacing-x-1">
			<tbody>
				{#each Object.keys($ctrlCStore.groups[selectedGroupKey].strings).sort((a, b) => {
					return $ctrlCStore.groups[selectedGroupKey].strings[a].comment.localeCompare($ctrlCStore.groups[selectedGroupKey].strings[b].comment);
				}) as copyStringKey (copyStringKey)}
					<tr>
						<td
							><button
								class="w-full p-2"
								type="button"
								onclick={() => {
									if (navigator?.clipboard) {
										navigator.clipboard.writeText(
											$ctrlCStore.groups[selectedGroupKey].strings[copyStringKey].history[0]
										);
									}
								}}
								>{$ctrlCStore.groups[selectedGroupKey].strings[copyStringKey].comment ||
									'Copy'}</button
							></td
						>
						<td>
							{#if editingString === copyStringKey}
								<form
									class="w-[500px] flex flex-row gap-1"
									onsubmit={async (e) => {
										e.preventDefault();

										await requestPersistence();

										$ctrlCStore.groups[selectedGroupKey].strings[copyStringKey].history[0] =
											newString;

										editingString = '';
									}}
								>
									<input
										class="grow button-default"
										style="flex-grow: 1;flex-shrink: 1;"
										bind:value={newString}
									/>
									<button>Done</button>
									<button
										type="button"
										onclick={() => {
											editingString = '';
											newString = '';
										}}
									>
										Cancel
									</button>
								</form>
							{:else}
								<div class="flex flex-row w-[500px] gap-1">
									<div class="copy-string">
										{$ctrlCStore.groups[selectedGroupKey].strings[copyStringKey].history[0]}
									</div>
									<button
										type="button"
										onclick={() => {
											editingString = copyStringKey;
											newString =
												$ctrlCStore.groups[selectedGroupKey].strings[copyStringKey].history[0];
										}}>Edit</button
									>
								</div>
							{/if}
						</td>
						<td>
							<button
								type="button"
								onclick={async () => {
									await requestPersistence();
									editingComment = copyStringKey;
									newComment = $ctrlCStore.groups[selectedGroupKey].strings[copyStringKey].comment;
								}}
							>
								Edit Comment
							</button>
							{#if editingComment === copyStringKey}
								<form
									class="inline"
									onsubmit={async (e) => {
										e.preventDefault();

										await requestPersistence();

										$ctrlCStore.groups[selectedGroupKey].strings[copyStringKey].comment =
											newComment;

										editingComment = '';
									}}
								>
									<input class="button-default" bind:value={newComment} />
									<button>Done</button>
									<button
										type="button"
										onclick={() => {
											editingComment = '';
											newComment = '';
										}}
									>
										Cancel
									</button>
								</form>
							{/if}
						</td>
						<td>
							<button
								type="button"
								onclick={async () => {
									if (
										!confirm(
											`Really delete "${$ctrlCStore.groups[selectedGroupKey].strings[copyStringKey].comment}"?`
										)
									) {
										return;
									}

									const tempStrings = $ctrlCStore.groups[selectedGroupKey].strings;
									delete tempStrings[copyStringKey];
									$ctrlCStore.groups[selectedGroupKey].strings = tempStrings;
								}}>Delete</button
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	input,
	button,
	select {
		color: white;
		background-color: #002010;
	}

	.copy-string {
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
		flex-shrink: 1;
		flex-grow: 1;
	}

	.importer {
		position: absolute;
		top: calc(100% + 5px);
		right: 0;
		padding: 5px;
		border: 1px solid #888888;

		display: flex;
		flex-direction: column;
		gap: 5px;
	}
</style>
