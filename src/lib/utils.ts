import type { Hideout } from '$lib/types';

import { soycat, soycatCentre } from './hideouts/soycat';

export const getDoodadCounts = (hideout: string, lax: boolean = false) => {
	const doodads: { [key: string]: number } = {};

	[...hideout.matchAll(/"([\w\s]+)":\s?\{/g)].forEach((match) => {
		if (match[1] === 'doodads') {
			return;
		}
		if (
			!lax &&
			[
				'Stash',
				'Guild Stash',
				'Waypoint',
				'Crafting Bench',
				'Map Device',
				'Horticrafting Station',
				'Heist Locker',
				'Expedition Locker',
				'Tane Octavius',
				'Kirac',
				'Sister Cassia',
				'Einhar',
				'Alva',
				'Helena',
				'Niko',
				'Jun',
				'The Last to Die',
				'Lilly Roth',
				'Relic Locker'
			].includes(match[1])
		) {
			return;
		}

		if (!doodads[match[1]]) {
			doodads[match[1]] = 1;
		} else {
			doodads[match[1]] += 1;
		}
	});

	return doodads;
};

const moveDecoration = (
	hideout: string,
	hideoutCentre: { x: number; y: number },
	targetCentre: { x: number; y: number }
) => {
	const x = targetCentre.x - hideoutCentre.x;
	const y = targetCentre.y - hideoutCentre.y;

	return hideout
		.replaceAll(/"x": (\d+)/g, (_match, p1) => {
			const tempX = parseInt(p1, 10);

			return `"x": ${tempX + x}`;
		})
		.replaceAll(/"y": (\d+)/g, (_match, p1) => {
			const tempY = parseInt(p1, 10);

			return `"y": ${tempY + y}`;
		});
};

export const replaceWithSoycat = (
	originalHideout: string,
	chosenDoodad: string,
	adjustment: { x: number; y: number }
) => {
	if (!chosenDoodad) {
		return originalHideout;
	}

	const re = new RegExp(`"${chosenDoodad}"\\s?:\\s*\\{[^}]+?\\}`);

	const b = originalHideout.match(re);

	const b0 = b?.[0];

	const doodadX = b0?.match(/"x": (\d+)/)?.[1];
	const doodadY = b0?.match(/"y": (\d+)/)?.[1];

	if (!doodadX || !doodadY) {
		return originalHideout;
	}

	const movedSoycat = moveDecoration(soycat, soycatCentre, {
		x: parseInt(doodadX, 10) + adjustment.x,
		y: parseInt(doodadY, 10) + adjustment.y
	});

	return originalHideout.replaceAll(/\s+/g, ' ').replace(re, movedSoycat);
};

export const findCommonDoodads = (hideouts: (Hideout | null)[]): string[] => {
	const doodadIntersection: { [key: string]: number } = {};

	for (let i = 0; i < hideouts.length; i++) {
		const hideout = hideouts[i];
		if (!hideout) {
			continue;
		}

		Object.entries(hideout.doodadCounts).forEach(([key, value]) => {
			if (value > 1) {
				return;
			}

			if (!doodadIntersection[key]) {
				doodadIntersection[key] = 1;
			} else {
				doodadIntersection[key] = doodadIntersection[key] + 1;
			}
		});
	}

	const commonDoodads: string[] = [];

	Object.entries(doodadIntersection).forEach(([key, value]) => {
		if (value < hideouts.length) {
			return;
		}

		commonDoodads.push(key);
	});

	return commonDoodads
		.filter((a) => a)
		.sort((a, b) => {
			if (['Stash', 'Waypoint'].includes(a) && ['Stash', 'Waypoint'].includes(b)) {
				return a.localeCompare(b);
			}

			if (['Stash', 'Waypoint'].includes(a)) {
				return -1;
			}

			if (['Stash', 'Waypoint'].includes(b)) {
				return 1;
			}

			return a.localeCompare(b);
		});
};

export const sameOrFirstDoodad = (previousDoodad: string, hideouts: (Hideout | null)[]): string => {
	const commonDoodads = findCommonDoodads(hideouts);

	if (commonDoodads.includes(previousDoodad)) {
		previousDoodad;
	}

	if (!previousDoodad) {
		if (commonDoodads.includes('Stash')) {
			return 'Stash';
		}

		if (commonDoodads.includes('Waypoint')) {
			return 'Waypoint';
		}

		return commonDoodads[0];
	}

	return '';
};

export const migrateHideout = (
	chosenDoodad: string,
	hideout1: Hideout | null,
	hideout2: Hideout | null
): string => {
	if (!hideout1 || !hideout2) {
		return '';
	}

	const doodad1 = hideout1.hideoutObject.doodads[chosenDoodad];
	const doodad2 = hideout2.hideoutObject.doodads[chosenDoodad];

	if (!doodad1 || !doodad2) {
		return '';
	}

	let newHideout = moveDecoration(hideout1.hideoutString, doodad1, doodad2);

	// replace hideout names
	newHideout = newHideout.replace(
		`"hideout_name": "${hideout1.hideoutObject.hideout_name}"`,
		`"hideout_name": "${hideout2.hideoutObject.hideout_name}"`
	);

	newHideout = newHideout.replace(
		`"hideout_hash": ${hideout1.hideoutObject.hideout_hash}`,
		`"hideout_hash": ${hideout2.hideoutObject.hideout_hash}`
	);

	return newHideout;
};
