<script lang="ts">
import {ctrlCStore} from '$lib/stores/ctrl-c'

let selectedSetName = $state($ctrlCStore.default)
let currentSet = $derived($ctrlCStore.sets[selectedSetName])
</script>

<div class="container">
<div class="controls">
		<select bind:value={selectedSetName}>
				{#each Object.values($ctrlCStore.sets) as ctrlCSet (ctrlCSet.name)}
						<option value={ctrlCSet.name}>{ctrlCSet.name}</option>
{/each}
				</select>
				<button type="button" onclick={() => {
						let setName = prompt("Enter set name")
						if (!setName) {
								return
						}

						setName = setName.toLocaleLowerCase().replaceAll(/[^a-z0-9_\- ]/g,"")

						if (!$ctrlCStore.sets[setName]) {
								$ctrlCStore.sets[setName] = {
										name: setName,
										favourites: {},
										refreshMs: 1000 * 60 * 60 * 24,
										strings: {}
								}
						}

						selectedSetName = setName
				}}>New Set</button>
				<div style="flex-grow: 1;"></div>
				<button type="button" onclick={() => {
						}}>Import</button>
				</div>
		<div class="main">
				<h2>{currentSet.name}</h2>
				{#each Object.keys(currentSet.strings) as copyStringKey (copyStringKey)}
			<div>{currentSet.strings[copyStringKey].history[0]}</div>
				{/each}
				</div>
</div>

<style>
.controls {
		display: flex;
		flex-direction: row;
		gap: 5px;

		select {
text-transform: capitalize;
		}
}

.main {
		h2 {
				text-transform: capitalize;
		}
}
</style>
