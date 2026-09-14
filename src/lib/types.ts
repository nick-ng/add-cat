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
	key: z.string(),
	name: z.string(),
	url: z.string().optional(),
	refreshMs: z.number().default(1000 * 60 * 60 * 24), // 1 day in ms
	defaultAt: z.number(), // when this set was made the default
	favourites: z.record(z.string(), z.string()),
	strings: z.record(
		z.string(),
		z.object({
			history: z.array(z.string()),
			comment: z.string()
		})
	)
});

export const ctrlCStoreSchema = z.object({
	groups: z.record(z.string(), ctrlCSetSchema),
	updatedGroup: z.string()
});

export type CtrlCStore = z.infer<typeof ctrlCStoreSchema>;

export const delveRowSchema = z.object({
	goal: z.string(),
	startingSulfite: z.number(),
	startingAzurite: z.number(),
	startingDepth: z.number(),
	startingFossilTabC: z.number(),
	startingTimestampMs: z.number(),
	endingSulfite: z.number(),
	endingAzurite: z.number(),
	endingDepth: z.number(),
	endingFossilTabC: z.number(),
	endingTimestampMs: z.number()
});

export const delveRowsSchema = z.array(delveRowSchema);

export type DelveRow = z.infer<typeof delveRowSchema>;

export const delveSessionsSchema = z.object({
	currentSession: z.string().nullable(),
	sessions: z.array(
		z.object({
			id: z.string(),
			name: z.string()
		})
	)
});

export type DelveSessions = z.infer<typeof delveSessionsSchema>;
