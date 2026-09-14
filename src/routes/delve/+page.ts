import type { DelveRow, DelveSessions } from '$lib/types';

import localforage from 'localforage';
import { delveRowsSchema, delveSessionsSchema } from '$lib/types';
import { SESSIONS_STORE_KEY, STORE_PREFIX } from './constants';

export type PageLoad = {
	sessionsData: DelveSessions;
	delveRows: DelveRow[];
};

export type PageProps = {
	data: PageLoad;
};

// @todo(nick-ng): move this to a onMount in the +page.svelte file
export const load = async (): Promise<PageLoad> => {
	try {
		const sessionsString = await localforage.getItem(SESSIONS_STORE_KEY);
		if (typeof sessionsString === 'string' && sessionsString.length > 0) {
			const unknownSessions = JSON.parse(sessionsString);
			const sessionsResult = delveSessionsSchema.safeParse(unknownSessions);
			if (sessionsResult.success && sessionsResult.data.sessions) {
				let delveRows: DelveRow[] = [];
				if (sessionsResult.data.currentSession) {
					try {
						const delveRowsString = await localforage.getItem(
							`${STORE_PREFIX}${sessionsResult.data.currentSession}`
						);
						if (typeof delveRowsString === 'string' && delveRowsString.length > 0) {
							const unknownRows = JSON.parse(delveRowsString);
							const rowsResult = delveRowsSchema.safeParse(unknownRows);
							if (rowsResult.success) {
								delveRows = rowsResult.data;
							}
						}
					} catch (e) {
						console.error('error parsing delve rows', e);
					}
				}

				return {
					sessionsData: sessionsResult.data,
					delveRows
				};
			}
		}
	} catch (e) {
		console.error('error parsing delve sessions', e);
	}

	return {
		sessionsData: {
			currentSession: null,
			sessions: []
		},
		delveRows: []
	};
};
