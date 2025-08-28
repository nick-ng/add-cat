import type { CtrlCStore } from '$lib/types';

import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { ctrlCSetSchema, ctrlCStoreSchema } from '$lib/types';

const STORE_PREFIX = 'PUX_CTRL_C_SET_';
const STORE_KEY = 'PUX_CTRL_C_SETTINGS';

export const ctrlCStore = writable<CtrlCStore>({
	default: 'default',
	sets: {
		default: { name: 'default', favourites: {}, refreshMs: 1000 * 60 * 60 * 24, strings: {} }
	}
});

if (browser) {
	const stores = localStorage;
	console.log('stores', Object.keys(stores));
}
