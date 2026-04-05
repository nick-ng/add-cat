<script lang="ts">
	import '../app.css';

	import { page } from '$app/state';
</script>

{#if !['/ctrl-c'].some((subString) => page.route.id?.startsWith(subString))}
	<div class="flex flex-row mx-2 my-2 gap-2">
		<a
			class="rounded border border-gray-600 px-2 py-0 dark:border-gray-300 cannot-hover:py-2"
			href="/">Migrate Hideout</a
		>
		<a
			class="rounded border border-gray-600 px-2 py-0 dark:border-gray-300 cannot-hover:py-2"
			href="/add-cat">Add Cat</a
		>
		<div>{JSON.stringify(page.route, null, 2)}</div>
	</div>
{/if}
<slot />

<style>
	:global(body) {
		color: white;
		background-color: #002010;
	}
</style>
