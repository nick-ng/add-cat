import type { CtrlCStore } from '$lib/types';

import { writable } from 'svelte/store';
import localforage from 'localforage';
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

export const importJsonString = (jsonString: string | null) => {
	if (!jsonString) {
		return;
	}

	try {
		const unknown = JSON.parse(jsonString);
		const result = ctrlCSetSchema.safeParse(unknown);
		if (result.error) {
			console.error('group has wrong schema');
			return;
		}

		const ctrlCSet = result.data;
		ctrlCStore.update((prev) => {
			prev.groups[ctrlCSet.key] = ctrlCSet;
			return prev;
		});
	} catch (e) {
		console.error('error when parsing group', e);
	}
};

async function firstLoad() {
	const allKeys = await localforage.keys();
	const ctrlCSetKeys = allKeys.filter((k) => k.startsWith(STORE_PREFIX));
	await Promise.all(
		ctrlCSetKeys.map(async (key) => {
			const setString = await localforage.getItem(key);
			if (typeof setString === 'string') {
				importJsonString(setString);
			}
		})
	);

	ctrlCStore.subscribe((nextData) => {
		const updatedGroup = nextData.groups[nextData.updatedGroup];
		if (!updatedGroup) {
			return;
		}

		const storeKey = `${STORE_PREFIX}${updatedGroup.key}`;
		localforage.setItem(storeKey, JSON.stringify(updatedGroup));
	});
}

if (browser) {
	firstLoad();
}

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
