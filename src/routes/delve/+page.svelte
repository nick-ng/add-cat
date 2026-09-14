<script lang="ts">
	import type { PageProps } from './+page';

	let { data }: PageProps = $props();
</script>

<div class="w-prose2 m-auto my-2">
	<h1>Delve</h1>
	<p>Coming soon</p>
	<details>
		<summary> Debug </summary>
		<pre>{JSON.stringify(data)}</pre>
	</details>
</div>
