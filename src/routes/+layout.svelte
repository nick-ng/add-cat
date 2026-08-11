<script lang="ts">
	import '../app.css';
</script>

<div class="flex flex-row gap-2">
	<div class="grow shrink">
		<slot />
	</div>
	<div class="flex flex-col mx-2 my-2 gap-2">
		<a
			class="rounded border border-gray-600 text-center px-1 py-1 dark:border-gray-300 cannot-hover:py-2 text-blue-300 dark:text-blue-300"
			href="/ctrl-c"
		>
			RegExp
		</a>
		<a
			class="rounded border border-gray-600 text-center px-1 py-1 dark:border-gray-300 cannot-hover:py-2 text-blue-300 dark:text-blue-300"
			href="/migrate-hideout"
		>
			Migrate Hideout
		</a>
	</div>
</div>

<style>
	:global(body) {
		color: white;
		background-color: #002010;
	}
</style>
