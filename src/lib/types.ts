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
