import type { DelveRow, DelveSessions } from '$lib/types';

import localforage from 'localforage';
import { delveRowsSchema, delveSessionsSchema } from '$lib/types';
import { SESSIONS_STORE_KEY, STORE_PREFIX } from './constants';

export async function getDelveSessionData(): Promise<DelveSessions> {
	const sessionsString = await localforage.getItem(SESSIONS_STORE_KEY);
	if (typeof sessionsString !== 'string' || sessionsString.length === 0) {
		return {
			currentSession: null,
			sessions: []
		};
	}

	try {
		const unknownSessions = JSON.parse(sessionsString);
		const sessionsResult = delveSessionsSchema.safeParse(unknownSessions);
		if (sessionsResult.success) {
			return sessionsResult.data;
		}
	} catch (e) {
		console.error('error parsing delve sessions', e);
	}

	return {
		currentSession: null,
		sessions: []
	};
}

export async function getDelveRows(sessionId: string): Promise<DelveRow[]> {
	if (sessionId.length === 0) {
		return [];
	}
	const delveRowStoreKey = `${STORE_PREFIX}${sessionId}`;
	const delveRowsString = await localforage.getItem(delveRowStoreKey);
	if (typeof delveRowsString !== 'string' || delveRowsString.length === 0) {
		return [];
	}

	try {
		const unknownRows = JSON.parse(delveRowsString);
		const rowsResult = delveRowsSchema.safeParse(unknownRows);
		if (rowsResult.success) {
			return rowsResult.data;
		}
	} catch (e) {
		console.error('error parsing delve rows', e);
	}

	return [];
}

export async function saveDelveSessionData(newSessionData: DelveSessions): Promise<boolean> {
	try {
		await localforage.setItem(SESSIONS_STORE_KEY, JSON.stringify(newSessionData));

		return true;
	} catch (e) {
		console.error('error saving delve sessions', e);
	}

	return false;
}

export async function saveDelveRows(sessionId: string, newRows: DelveRow[]): Promise<boolean> {
	if (sessionId.length === 0) {
		return false;
	}

	const delveRowStoreKey = `${STORE_PREFIX}${sessionId}`;
	try {
		await localforage.setItem(delveRowStoreKey, JSON.stringify(newRows));

		return true;
	} catch (e) {
		console.error(`error saving delve rows for ${sessionId}`, e);
	}

	return false;
}
