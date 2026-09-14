<script lang="ts">
	import type { DelveRow } from '$lib/types';
	import type { PageProps } from './+page';

	import localforage from 'localforage';
	import { delveRowsSchema, delveSessionsSchema } from '$lib/types';
	import { requestPersistence } from '$lib/utils';
	import { STORE_PREFIX, SESSIONS_STORE_KEY } from './constants';

	let { data }: PageProps = $props();
</script>

<div class="w-prose2 m-auto my-2">
	<h1>Delve</h1>
	<details>
		<summary> Debug </summary>
		<pre>{JSON.stringify(data)}</pre>
	</details>
</div>
