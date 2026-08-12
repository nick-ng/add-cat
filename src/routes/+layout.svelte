<script lang="ts">
	import '../app.css';
</script>

<div class="flex flex-row gap-2">
	<div class="grow shrink">
		<slot />
	</div>
	<div class="flex flex-col mx-2 my-2 gap-2">
		<a class="button-default text-center no-underline text-blue-300" href="/ctrl-c"> RegExp </a>
		<a class="button-default text-center no-underline text-blue-300" href="/asleep-poe-trade">
			Item Parser
		</a>
		<a class="button-default text-center no-underline text-blue-300" href="/migrate-hideout">
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
