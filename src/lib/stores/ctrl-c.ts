import type { CtrlCStore } from '$lib/types';

import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { ctrlCSetSchema } from '$lib/types';

const STORE_PREFIX = 'PUX_CTRL_C_SET_';
// const STORE_KEY = 'PUX_CTRL_C_SETTINGS';

// the default set has the key "d00". others will have "s<timestamp>"
export const ctrlCStore = writable<CtrlCStore>({
	groups: {
		d00: {
			key: 'd00',
			name: 'default',
			defaultAt: 1,
			favourites: {},
			refreshMs: 1000 * 60 * 60 * 24,
			strings: {}
		}
	},
	updatedGroup: ''
});

if (browser) {
	const ctrlCSetKeys = Object.keys(localStorage).filter((k) => k.startsWith(STORE_PREFIX));
	ctrlCStore.update((prev) => {
		for (let i = 0; i < ctrlCSetKeys.length; i++) {
			const key = ctrlCSetKeys[i];
			const setString = localStorage.getItem(key);
			if (!setString) {
				continue;
			}

			try {
				const unknown = JSON.parse(setString);
				const result = ctrlCSetSchema.safeParse(unknown);
				if (result.error) {
					console.error('error when parsing set a', key, result.data);
					continue;
				}

				const ctrlCSet = result.data;
				prev.groups[ctrlCSet.key] = ctrlCSet;
				console.log('ctrlCSet', i, ctrlCSet);
			} catch (e) {
				console.error('error when parsing set b', key, e);
			}
		}

		return prev;
	});
}

ctrlCStore.subscribe((nextData) => {
	console.log(new Date());
	const updatedGroup = nextData.groups[nextData.updatedGroup];
	if (!updatedGroup) {
		return;
	}

	const storeKey = `${STORE_PREFIX}${updatedGroup.key}`;
	localStorage.setItem(storeKey, JSON.stringify(updatedGroup));
});

export const getDefault = (store: CtrlCStore) => {
	let d = '';
	let defaultTime = 0;
	Object.values(store.groups).forEach((s) => {
		if (s.defaultAt > defaultTime) {
			d = s.key;
			defaultTime = s.defaultAt;
		}
	});

	return d;
};
