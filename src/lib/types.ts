import z from 'zod';

export type Doodad = {
	x: number;
	y: number;
};

export type HideoutObject = {
	hideout_name: string;
	hideout_hash: string;
	doodads: { [key: string]: Doodad };
};

export type Hideout = {
	hideoutString: string;
	hideoutObject: HideoutObject;
	hideoutName: string;
	isValid: boolean;
	uploadTimestampMs: number;
	doodadCounts: { [key: string]: number };
};

export const ctrlCSetSchema = z.object({
	name: z.string(),
	url: z.string().optional(),
	refreshMs: z.number().default(1000 * 60 * 60 * 24), // 1 day in ms
	favourites: z.record(z.number(), z.string()),
	strings: z.record(z.string(),
				z.object({
						history: z.array(z.string()),
						comment: z.string(),
				})
		)
});

export const ctrlCStoreSchema = z.object({
	default: z.string(),
	sets: z.record(z.string(), ctrlCSetSchema)
});

export type CtrlCStore = z.infer<typeof ctrlCStoreSchema>
