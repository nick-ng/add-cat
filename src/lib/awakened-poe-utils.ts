/**
 * Standalone item-text parsing and trade-search URL building, distilled from
 * awakened-poe-trade (renderer/src/parser and renderer/src/web/price-check/trade).
 *
 * English client text only.
 *
 * Browser-only, no dependencies.
 *
 * `parseItemString` is pure and synchronous.
 *
 * `generateSearchUrl` needs the trade stat-id table, which it reads from
 * IndexedDB — so it is async. Seed that table once with `importStats`, passing
 * the text of awakened-poe-trade's `renderer/public/data/en/stats.ndjson`.
 */

// #region types

export type Rarity =
	| 'Normal'
	| 'Magic'
	| 'Rare'
	| 'Unique'
	| 'Gem'
	| 'Currency'
	| 'Divination Card'
	| 'Quest';

export type ModifierType =
	| 'explicit'
	| 'implicit'
	| 'crafted'
	| 'fractured'
	| 'enchant'
	| 'scourge'
	| 'veiled';

export type Influence = 'Shaper' | 'Elder' | 'Crusader' | 'Hunter' | 'Redeemer' | 'Warlord';

export interface DamageRoll {
	min: number;
	max: number;
}

export interface ParsedModifier {
	/** Line(s) exactly as the game printed them, minus the trailing `(implicit)`-style tag. */
	text: string;
	type: ModifierType;
	/** `text` with every roll replaced by `#`, e.g. `# to maximum Life`. */
	statText: string;
	/** Rolls pulled out of `text`, in order of appearance. */
	values: number[];
	/** Roll bounds, present only when copied with Advanced Item Descriptions. */
	bounds?: DamageRoll[];
	/**
	 * The affix rolls in decimals. Taken from the text rather than the parsed
	 * numbers, because `8.00` and `1.50(1.00-2.00)` parse to whole numbers while
	 * still being decimal-rolling affixes.
	 */
	decimals?: true;
	generation?: 'prefix' | 'suffix' | 'corrupted' | 'eldritch';
	/** Affix name, e.g. `Athlete's` — Advanced Item Descriptions only. */
	name?: string;
	tier?: number;
	rank?: number;
	tags?: string[];
}

export interface ParsedSockets {
	raw: string;
	count: number;
	/** Size of the largest linked group. */
	links: number;
	white: number;
}

export interface ParsedItem {
	itemClass?: string;
	rarity?: Rarity;
	/** Rare/unique display name, or the base type for everything else. */
	name: string;
	/** Present when the game printed a separate base-type line (rares and uniques). */
	baseType?: string;
	isUnidentified: boolean;
	isCorrupted: boolean;
	isMirrored: boolean;
	isSplit: boolean;
	isSynthesised: boolean;
	isFoil: boolean;
	isUnmodifiable: boolean;
	influences: Influence[];
	itemLevel?: number;
	quality?: number;
	gemLevel?: number;
	stackSize?: number;
	mapTier?: number;
	/**
	 * The area a Chart or Scrying Orb points at, e.g. `Toxic Sewer`. Regular maps
	 * do not name an area — they are generically `Map (Tier 14)`.
	 */
	mapArea?: string;
	mapItemQuantity?: number;
	mapItemRarity?: number;
	mapMonsterPackSize?: number;
	chartSulphur?: number;
	areaLevel?: number;
	sockets?: ParsedSockets;
	requirements: {
		level?: number;
		str?: number;
		dex?: number;
		int?: number;
	};
	properties: {
		armour?: number;
		evasion?: number;
		energyShield?: number;
		ward?: number;
		blockChance?: number;
		physicalDamage?: DamageRoll;
		elementalDamage?: DamageRoll[];
		chaosDamage?: DamageRoll;
		criticalStrikeChance?: number;
		attacksPerSecond?: number;
		/** Physical damage per second. */
		pdps?: number;
		/** Elemental damage per second. */
		edps?: number;
		/** Total damage per second, including chaos. */
		dps?: number;
	};
	modifiers: ParsedModifier[];
	/** Lines no parser claimed — flavour text, reminder text, help text. */
	unparsedLines: string[];
	rawText: string;
}

export interface SearchRange {
	min: number;
	max: number;
}

/** What is being widened, so a custom `range` can treat fields differently. */
export interface RangeContext {
	/** Trade id for a modifier, or the `ParsedItem` property name otherwise. */
	field: string;
	source: 'modifier' | 'property';
	/** Canonical stat name, for modifiers only. */
	stat?: string;
	/** 1 when a higher roll is better, -1 when lower is better, 0 when neither. */
	better?: number;
	/** The value rolls in decimals, so a whole-number step would be too coarse. */
	decimals: boolean;
	/**
	 * The affix's own possible range, present only when the item was copied with
	 * Advanced Item Descriptions on. stats.ndjson does not carry roll ranges —
	 * this is the only place they come from.
	 */
	bounds?: DamageRoll;
}

export interface SearchUrlOptions {
	/** Turn each roll into a min/max window. Defaults to the wider of ±5% and ±1. */
	range?: (value: number, context: RangeContext) => SearchRange;
	/** Include a filter per parsed modifier. Default `true`. */
	statFilters?: boolean;
	/** Include defence/dps/quality/item-level filters. Default `true`. */
	propertyFilters?: boolean;
	/** Listing status. Default `'securable'`. */
	status?: 'online' | 'securable' | 'available' | 'any';
	/** Modifiers whose stat id could not be resolved, collected for the caller. */
	unresolved?: string[];
}

// #endregion

// #region client strings

const ITEM_CLASS_LINE = 'Item Class: ';
const RARITY_LINE = 'Rarity: ';

const RARITIES: Rarity[] = [
	'Normal',
	'Magic',
	'Rare',
	'Unique',
	'Gem',
	'Currency',
	'Divination Card',
	'Quest'
];

const INFLUENCE_LINES: ReadonlyMap<string, Influence> = new Map([
	['Shaper Item', 'Shaper'],
	['Elder Item', 'Elder'],
	['Crusader Item', 'Crusader'],
	['Hunter Item', 'Hunter'],
	['Redeemer Item', 'Redeemer'],
	['Warlord Item', 'Warlord']
] as Array<[string, Influence]>);

/** Trailing tags the game appends to a modifier line to declare its type. */
const MODIFIER_TAGS: ReadonlyArray<[string, ModifierType]> = [
	[' (implicit)', 'implicit'],
	[' (crafted)', 'crafted'],
	[' (fractured)', 'fractured'],
	[' (enchant)', 'enchant'],
	[' (scourge)', 'scourge'],
	[' (veiled)', 'veiled']
];

const MAP_TIER_SUFFIX = / \(Tier (\d+)\)$/;

const MODIFIER_INFO_LINE =
	/^(?<type>[^"]+?)(?:\s+"(?<name>[^"]*)")?(?:\s+\(Tier: (?<tier>\d+)\))?(?:\s+\(Rank: (?<rank>\d+)\))?$/;

const ELDRITCH_INFO_LINE = /^(?:Eater of Worlds|Searing Exarch) Implicit Modifier \((?<rank>.+)\)$/;

const ELDRITCH_RANKS = ['Lesser', 'Greater', 'Grand', 'Exceptional', 'Exquisite', 'Perfect'];

const MODIFIER_INFO_TYPES: ReadonlyMap<
	string,
	{ type: ModifierType; generation?: ParsedModifier['generation'] }
> = new Map([
	['Prefix Modifier', { type: 'explicit' as ModifierType, generation: 'prefix' as const }],
	['Suffix Modifier', { type: 'explicit' as ModifierType, generation: 'suffix' as const }],
	[
		'Master Crafted Prefix Modifier',
		{ type: 'crafted' as ModifierType, generation: 'prefix' as const }
	],
	[
		'Master Crafted Suffix Modifier',
		{ type: 'crafted' as ModifierType, generation: 'suffix' as const }
	],
	[
		'Fractured Prefix Modifier',
		{ type: 'fractured' as ModifierType, generation: 'prefix' as const }
	],
	[
		'Fractured Suffix Modifier',
		{ type: 'fractured' as ModifierType, generation: 'suffix' as const }
	],
	['Implicit Modifier', { type: 'implicit' as ModifierType }],
	[
		'Corruption Implicit Modifier',
		{ type: 'implicit' as ModifierType, generation: 'corrupted' as const }
	],
	['Vestigial Implicit Modifier', { type: 'implicit' as ModifierType }],
	['Foulborn Unique Modifier', { type: 'explicit' as ModifierType }]
]);

/** `Item Class:` line to the trade site's `type_filters.category` option. */
const ITEM_CLASS_TO_TRADE_CATEGORY: ReadonlyMap<string, string> = new Map([
	['Bows', 'weapon.bow'],
	['Claws', 'weapon.claw'],
	['Daggers', 'weapon.dagger'],
	['Rune Daggers', 'weapon.runedagger'],
	['Wands', 'weapon.wand'],
	['Sceptres', 'weapon.sceptre'],
	['One Hand Axes', 'weapon.oneaxe'],
	['One Hand Maces', 'weapon.onemace'],
	['One Hand Swords', 'weapon.onesword'],
	['Thrusting One Hand Swords', 'weapon.onesword'],
	['Two Hand Axes', 'weapon.twoaxe'],
	['Two Hand Maces', 'weapon.twomace'],
	['Two Hand Swords', 'weapon.twosword'],
	['Staves', 'weapon.staff'],
	['Warstaves', 'weapon.warstaff'],
	['Fishing Rods', 'weapon.rod'],
	['Body Armours', 'armour.chest'],
	['Boots', 'armour.boots'],
	['Gloves', 'armour.gloves'],
	['Helmets', 'armour.helmet'],
	['Shields', 'armour.shield'],
	['Quivers', 'armour.quiver'],
	['Amulets', 'accessory.amulet'],
	['Rings', 'accessory.ring'],
	['Belts', 'accessory.belt'],
	['Trinkets', 'accessory.trinket'],
	['Jewels', 'jewel'],
	['Abyss Jewels', 'jewel.abyss'],
	['Cluster Jewels', 'jewel.cluster'],
	['Maps', 'map'],
	['Life Flasks', 'flask'],
	['Mana Flasks', 'flask'],
	['Hybrid Flasks', 'flask'],
	['Utility Flasks', 'flask'],
	['Critical Utility Flasks', 'flask'],
	['Tinctures', 'tincture'],
	['Charms', 'azmeri.charm'],
	['Contracts', 'heistmission.contract'],
	['Blueprints', 'heistmission.blueprint'],
	['Heist Tools', 'heistequipment.heisttool'],
	['Heist Brooches', 'heistequipment.heistreward'],
	['Heist Gear', 'heistequipment.heistweapon'],
	['Heist Cloaks', 'heistequipment.heistutility'],
	['Relics', 'sanctum.relic'],
	['Idols', 'idol'],
	['Charts', 'chart']
]);

// #endregion

// #region parsing

const SECTION_SEPARATOR = '--------';

/**
 * Splits a copied item into its `--------` delimited sections and runs each one
 * past the parsers until one claims it.
 */
export function parseItemString(itemString: string): ParsedItem | null {
	const sections = itemTextToSections(itemString);
	if (!sections.length) return null;

	const item = parseNamePlate(sections[0]);
	if (!item) return null;
	item.rawText = itemString;

	for (const section of sections.slice(1)) {
		if (parseSection(section, item)) continue;
		item.unparsedLines.push(...section);
	}

	computeDamagePerSecond(item);
	return item;
}

function itemTextToSections(text: string): string[][] {
	const sections: string[][] = [[]];
	for (const line of text.split(/\r?\n/)) {
		if (line === SECTION_SEPARATOR) {
			sections.push([]);
		} else {
			sections[sections.length - 1].push(line);
		}
	}
	return sections
		.map((section) => section.filter((line) => line.length))
		.filter((section) => section.length);
}

function parseNamePlate(section: string[]): ParsedItem | null {
	const lines = [...section];

	let itemClass: string | undefined;
	if (lines[0]?.startsWith(ITEM_CLASS_LINE)) {
		itemClass = lines.shift()!.slice(ITEM_CLASS_LINE.length);
	}

	let rarity: Rarity | undefined;
	if (lines[0]?.startsWith(RARITY_LINE)) {
		const rarityText = lines.shift()!.slice(RARITY_LINE.length);
		rarity = RARITIES.find((known) => known === rarityText);
	}

	// "You cannot use this item..." is appended to the nameplate section
	const usable = lines.filter((line) => !line.startsWith('You cannot use this item'));
	if (!usable.length) return null;

	// A map carries its tier in the nameplate rather than as a property, and the
	// rest of the name is the base type: `Map (Tier 14)`.
	let name = stripMarkup(usable[0]);
	let baseType = usable[1] != null ? stripMarkup(usable[1]) : undefined;
	const tiered = baseType ?? name;
	const tier = MAP_TIER_SUFFIX.exec(tiered);
	if (tier) {
		if (baseType) baseType = baseType.replace(tier[0], '');
		else name = name.replace(tier[0], '');
	}

	return {
		itemClass,
		rarity,
		name,
		baseType,
		mapTier: tier ? Number(tier[1]) : undefined,
		isUnidentified: false,
		isCorrupted: false,
		isMirrored: false,
		isSplit: false,
		isSynthesised: false,
		isFoil: false,
		isUnmodifiable: false,
		influences: [],
		requirements: {},
		properties: {},
		modifiers: [],
		unparsedLines: [],
		rawText: ''
	};
}

/** Drops the `<<set:X>>` / `<if:X>{...}` markup PoE wraps some names in. */
function stripMarkup(text: string): string {
	return text
		.replace(/<<set:.+?>>/g, '')
		.replace(/<(if:.+?|elif:.+?|else)>{(.+?)}/g, (_, type: string, body: string) =>
			type.startsWith('if:') ? body : ''
		);
}

type SectionParser = (section: string[], item: ParsedItem) => boolean;

const SECTION_PARSERS: SectionParser[] = [
	parseFlagSection,
	parseInfluenceSection,
	parseRequirementsSection,
	parsePropertySection,
	parseModifierSection
];

function parseSection(section: string[], item: ParsedItem): boolean {
	return SECTION_PARSERS.some((parser) => parser(section, item));
}

function parseFlagSection(section: string[], item: ParsedItem): boolean {
	const FLAGS: ReadonlyMap<string, keyof ParsedItem> = new Map([
		['Corrupted', 'isCorrupted'],
		['Unidentified', 'isUnidentified'],
		['Mirrored', 'isMirrored'],
		['Split', 'isSplit'],
		['Synthesised Item', 'isSynthesised'],
		['Foil Unique', 'isFoil'],
		['Unmodifiable', 'isUnmodifiable']
	] as Array<[string, keyof ParsedItem]>);

	if (!section.every((line) => FLAGS.has(line))) return false;
	for (const line of section) {
		(item as unknown as Record<string, boolean>)[FLAGS.get(line)!] = true;
	}
	return true;
}

function parseInfluenceSection(section: string[], item: ParsedItem): boolean {
	if (section.length > 2 || !section.every((line) => INFLUENCE_LINES.has(line))) return false;
	for (const line of section) {
		item.influences.push(INFLUENCE_LINES.get(line)!);
	}
	return true;
}

function parseRequirementsSection(section: string[], item: ParsedItem): boolean {
	if (section[0] !== 'Requirements:') return false;

	const REQUIREMENTS: ReadonlyMap<string, keyof ParsedItem['requirements']> = new Map([
		['Level: ', 'level'],
		['Str: ', 'str'],
		['Dex: ', 'dex'],
		['Int: ', 'int'],
		['Strength: ', 'str'],
		['Dexterity: ', 'dex'],
		['Intelligence: ', 'int']
	] as Array<[string, keyof ParsedItem['requirements']]>);

	for (const line of section.slice(1)) {
		for (const [prefix, key] of REQUIREMENTS) {
			if (line.startsWith(prefix)) {
				item.requirements[key] = firstNumber(line.slice(prefix.length));
				break;
			}
		}
	}
	return true;
}

function parsePropertySection(section: string[], item: ParsedItem): boolean {
	const lines = claimAreaName(section, item);
	const unclaimed = lines.filter((line) => !parsePropertyLine(line, item));
	if (unclaimed.length === lines.length && lines.length === section.length) return false;

	item.unparsedLines.push(...unclaimed);
	return true;
}

/**
 * A Chart names its area as a bare line at the top of the section holding that
 * area's level and quantity — `Toxic Sewer` above `Area Level: 83`. Detected by
 * shape rather than by item class, so it needs no data to recognise. A regular
 * map has the same section but leads with `Area Level:`, and so is left alone.
 */
function claimAreaName(section: string[], item: ParsedItem): string[] {
	if (section.length < 2) return section;
	if (!section.some((line) => line.startsWith('Area Level: '))) return section;
	if (isPropertyLine(section[0])) return section;

	item.mapArea = section[0];
	return section.slice(1);
}

const SCALAR_PROPERTIES: ReadonlyArray<[string, (item: ParsedItem, value: number) => void]> = [
	[
		'Item Level: ',
		(item, value) => {
			item.itemLevel = value;
		}
	],
	[
		'Quality: ',
		(item, value) => {
			item.quality = value;
		}
	],
	[
		'Level: ',
		(item, value) => {
			item.gemLevel = value;
		}
	],
	[
		'Stack Size: ',
		(item, value) => {
			item.stackSize = value;
		}
	],
	[
		'Area Level: ',
		(item, value) => {
			item.areaLevel = value;
		}
	],
	[
		'Item Quantity: ',
		(item, value) => {
			item.mapItemQuantity = value;
		}
	],
	[
		'Item Rarity: ',
		(item, value) => {
			item.mapItemRarity = value;
		}
	],
	[
		'Monster Pack Size: ',
		(item, value) => {
			item.mapMonsterPackSize = value;
		}
	],
	[
		"Dead Man's Sulphur: ",
		(item, value) => {
			item.chartSulphur = value;
		}
	],
	[
		'Armour: ',
		(item, value) => {
			item.properties.armour = value;
		}
	],
	[
		'Evasion Rating: ',
		(item, value) => {
			item.properties.evasion = value;
		}
	],
	[
		'Energy Shield: ',
		(item, value) => {
			item.properties.energyShield = value;
		}
	],
	[
		'Ward: ',
		(item, value) => {
			item.properties.ward = value;
		}
	],
	[
		'Chance to Block: ',
		(item, value) => {
			item.properties.blockChance = value;
		}
	],
	[
		'Critical Strike Chance: ',
		(item, value) => {
			item.properties.criticalStrikeChance = value;
		}
	],
	[
		'Attacks per Second: ',
		(item, value) => {
			item.properties.attacksPerSecond = value;
		}
	]
];

const TEXT_PROPERTIES: ReadonlyArray<
	[string, (item: ParsedItem, line: string, prefix: string) => void]
> = [
	[
		'Physical Damage: ',
		(item, line) => {
			item.properties.physicalDamage = parseDamageRolls(line)[0];
		}
	],
	[
		'Chaos Damage: ',
		(item, line) => {
			item.properties.chaosDamage = parseDamageRolls(line)[0];
		}
	],
	[
		'Elemental Damage: ',
		(item, line) => {
			item.properties.elementalDamage = parseDamageRolls(line);
		}
	],
	[
		'Sockets: ',
		(item, line, prefix) => {
			item.sockets = parseSockets(line.slice(prefix.length));
		}
	],
	// A Scrying Orb names its area outright rather than leading a section with it.
	[
		'Map Area: ',
		(item, line, prefix) => {
			item.mapArea = line.slice(prefix.length);
		}
	]
];

function isPropertyLine(line: string): boolean {
	return (
		SCALAR_PROPERTIES.some(([prefix]) => line.startsWith(prefix)) ||
		TEXT_PROPERTIES.some(([prefix]) => line.startsWith(prefix))
	);
}

function parsePropertyLine(line: string, item: ParsedItem): boolean {
	for (const [prefix, assign] of SCALAR_PROPERTIES) {
		if (!line.startsWith(prefix)) continue;
		const value = firstNumber(line.slice(prefix.length));
		if (value == null) return false;
		assign(item, value);
		return true;
	}

	for (const [prefix, assign] of TEXT_PROPERTIES) {
		if (!line.startsWith(prefix)) continue;
		assign(item, line, prefix);
		return true;
	}

	return false;
}

function parseDamageRolls(line: string): DamageRoll[] {
	const rolls: DamageRoll[] = [];
	for (const [, min, max] of line.matchAll(/(\d+)-(\d+)/g)) {
		rolls.push({ min: Number(min), max: Number(max) });
	}
	return rolls;
}

function parseSockets(raw: string): ParsedSockets {
	const groups = raw.trim().split(' ');
	return {
		raw: raw.trim(),
		count: groups.reduce((total, group) => total + group.split('-').length, 0),
		links: Math.max(...groups.map((group) => group.split('-').length)),
		white: (raw.match(/W/g) ?? []).length
	};
}

/**
 * Claims a section as modifiers. Handles both plain copies and Advanced Item
 * Description copies, where each mod is preceded by a `{ ... }` info line.
 */
function parseModifierSection(section: string[], item: ParsedItem): boolean {
	if (item.rarity == null || item.rarity === 'Currency' || item.rarity === 'Divination Card') {
		return false;
	}
	if (!section.some((line) => isModifierLine(line, item))) return false;

	for (const group of groupLinesByMod(section)) {
		for (const text of group.statLines) {
			const { statText, values, bounds, decimals } = extractRolls(text);
			item.modifiers.push({
				text,
				type: group.info.type,
				statText,
				values,
				bounds: bounds.length ? bounds : undefined,
				decimals: decimals || undefined,
				generation: group.info.generation,
				name: group.info.name,
				tier: group.info.tier,
				rank: group.info.rank,
				tags: group.info.tags
			});
		}
	}
	return item.modifiers.length > 0;
}

function isModifierLine(line: string, item: ParsedItem): boolean {
	if (isModInfoLine(line)) return true;
	if (MODIFIER_TAGS.some(([tag]) => line.endsWith(tag))) return true;
	// a plain-copy explicit mod: no tag to go on, so fall back to "has a roll in it"
	return item.rarity !== 'Normal' && /\d/.test(line) && !isReminderText(line);
}

function isModInfoLine(line: string): boolean {
	return line.startsWith('{') && line.endsWith('}');
}

function isReminderText(line: string): boolean {
	return line.startsWith('(') && line.endsWith(')');
}

interface ModifierGroup {
	info: Pick<ParsedModifier, 'type' | 'generation' | 'name' | 'tier' | 'rank' | 'tags'>;
	statLines: string[];
}

function* groupLinesByMod(section: string[]): Generator<ModifierGroup> {
	let group: ModifierGroup | undefined;

	for (const line of section) {
		if (isModInfoLine(line)) {
			if (group) yield group;
			group = { info: parseModInfoLine(line), statLines: [] };
			continue;
		}
		if (isReminderText(line)) continue;

		const { text, type } = stripModifierTag(line);
		if (group) {
			group.statLines.push(text);
		} else {
			yield { info: { type, tags: [] }, statLines: [text] };
		}
	}

	if (group) yield group;
}

function stripModifierTag(line: string): { text: string; type: ModifierType } {
	for (const [tag, type] of MODIFIER_TAGS) {
		if (line.endsWith(tag)) {
			return { text: line.slice(0, -tag.length), type };
		}
	}
	return { text: line, type: 'explicit' };
}

/** Reads `{ Prefix Modifier "Athlete's" (Tier: 3) — Life }`. */
function parseModInfoLine(line: string): ModifierGroup['info'] {
	const [modText, ...extraText] = line
		.slice(1, -1)
		.split('—')
		.map((part) => part.trim());

	const eldritch = ELDRITCH_INFO_LINE.exec(modText);
	if (eldritch) {
		const rank = ELDRITCH_RANKS.indexOf(eldritch.groups!.rank) + 1;
		return { type: 'implicit', generation: 'eldritch', rank: rank || undefined, tags: [] };
	}

	const match = MODIFIER_INFO_LINE.exec(modText);
	const known = match && MODIFIER_INFO_TYPES.get(match.groups!.type.trim());
	const tags = extraText
		.filter((part) => !/^.+?% Increased$/.test(part))
		.flatMap((part) => part.split(', '));

	return {
		type: known?.type ?? 'explicit',
		generation: known?.generation,
		name: match?.groups!.name || undefined,
		tier: Number(match?.groups!.tier) || undefined,
		rank: Number(match?.groups!.rank) || undefined,
		tags
	};
}

/**
 * Matches a roll and, when Advanced Item Descriptions is on, the `(40-60)`
 * bounds the game prints straight after it.
 */
const ROLL_PATTERN =
	/(?<value>(?<!\d|\))[+-]?\d+(?:\.\d+)?)(?:\((?<min>[^)-]*)(?:-(?<max>[^)]+))?\))?/gm;

interface ExtractedRolls {
	statText: string;
	values: number[];
	bounds: DamageRoll[];
	decimals: boolean;
}

function extractRolls(text: string): ExtractedRolls {
	const values: number[] = [];
	const bounds: DamageRoll[] = [];
	let decimals = false;

	const statText = text
		.replace(/\(\)/gm, '')
		.replace(ROLL_PATTERN, (_, value: string, min?: string, max?: string) => {
			values.push(Number(value));
			// a lone bound means a fixed roll, e.g. sextant "# uses remaining"
			if (max == null) max = min;
			if (min != null && !Number.isNaN(Number(min)) && !Number.isNaN(Number(max))) {
				bounds.push({ min: Number(min), max: Number(max) });
			}
			if (value.includes('.') || min?.includes('.') || max?.includes('.')) decimals = true;
			return '#';
		});

	return { statText, values, bounds, decimals };
}

function computeDamagePerSecond(item: ParsedItem): void {
	const { properties } = item;
	const { attacksPerSecond: aps } = properties;
	if (aps == null) return;

	const average = (roll: DamageRoll) => (roll.min + roll.max) / 2;
	const round = (value: number) => Math.round(value * 10) / 10;

	const physical = properties.physicalDamage ? average(properties.physicalDamage) : 0;
	const elemental = (properties.elementalDamage ?? []).reduce(
		(sum, roll) => sum + average(roll),
		0
	);
	const chaos = properties.chaosDamage ? average(properties.chaosDamage) : 0;

	properties.pdps = round(physical * aps);
	properties.edps = round(elemental * aps);
	properties.dps = round((physical + elemental + chaos) * aps);
}

function firstNumber(text: string): number | undefined {
	const match = /[+-]?\d+(?:\.\d+)?/.exec(text);
	return match ? Number(match[0]) : undefined;
}

// #endregion

// #region stats.ndjson import

/** The parts of a stats.ndjson line this module reads, before reshaping. */
interface SourceStat {
	better?: number;
	matchers: Array<{
		string: string;
		advanced?: string;
		negate?: true;
		value?: number;
	}>;
	trade: { ids: Record<string, string[]> };
}

/**
 * The modifier types a lookup can ask for, in mask order. Ids for any other
 * type — `pseudo`, `necropolis`, `imbued` — are dropped at import, since
 * nothing here can ever query them and storing them costs ~20% of the table.
 *
 * Append only: the bit positions are baked into every stored record, so
 * reordering or inserting means bumping DATABASE_VERSION.
 */
const MOD_TYPE_BITS: ReadonlyArray<string> = [
	'explicit',
	'implicit',
	'fractured',
	'crafted',
	'enchant',
	'scourge',
	'veiled'
];

/**
 * One stat a given piece of item text could mean, in its stored form. Field
 * names are terse because these are duplicated across ~12k rows, and the trade
 * ids are packed: a stat's id is almost always the same suffix under every
 * modifier type (`explicit.stat_3299347043`, `implicit.stat_3299347043`, …),
 * so the shared suffix is stored once against a bitmask of the types that have
 * it. That packing is what makes the table ~40% smaller than the source file.
 */
interface StoredCandidate {
	/** Trade id suffix shared by every type in `t`. */
	s?: string;
	/** Bitmask over MOD_TYPE_BITS. */
	t?: number;
	/** Per-type suffixes, for the handful of stats whose ids are not uniform. */
	x?: Record<string, string>;
	/** `better`, omitted when it is the usual 1 (a higher roll is better). */
	b?: number;
	/** This wording states the stat inverted — `Lose # Life when you Block`. */
	n?: 1;
	/** This wording implies a fixed roll — `Gain a Power Charge on Critical Strike` is 100%. */
	v?: number;
}

export interface StatsInfo {
	matcherCount: number;
	statCount: number;
	importedAt: string;
	/** Bumped when the record encoding changes, which makes `hasStats` ask for a re-import. */
	format: number;
}

export interface ItemsInfo {
	baseTypeCount: number;
	areaCount: number;
	discriminatorCount: number;
	importedAt: string;
	format: number;
}

/**
 * Everything taken out of items.ndjson, kept together because it is small enough
 * to read as one record.
 */
interface ItemData {
	/** Base types a magic or rare item can be built on. */
	baseTypes: Set<string>;
	/** Area name to the value the trade site knows it by, e.g. `Toxic Sewer` -> `25747`. */
	areas: Map<string, string>;
	/** Base type to its trade discriminator, e.g. `Coral Forest Chart` -> `chart`. */
	discriminators: Map<string, string>;
}

const DATABASE_NAME = 'awakened-poe-utils';
const DATABASE_VERSION = 3;
const MATCHER_STORE = 'matchers';
const ITEM_STORE = 'items';
const META_STORE = 'meta';
const STATS_META_KEY = 'stats';
const ITEMS_META_KEY = 'items';
const ITEM_DATA_KEY = 'craftable';

/**
 * Encoding versions, independent of DATABASE_VERSION so that adding a store
 * does not invalidate an unrelated table. Bumping one makes its `has…` check
 * report false, and the caller re-imports over the stale rows.
 */
const STATS_FORMAT = 1;
const ITEMS_FORMAT = 2;

/**
 * Reshapes stats.ndjson into a keyed lookup and writes it to IndexedDB,
 * replacing whatever was there.
 *
 * The source file is organised by stat — each line lists the several wordings
 * the game may print for it. Lookups run the other way, from a line of item
 * text to a trade id, so this inverts it into one record per wording. Each
 * record carries everything a lookup needs, so generating a URL is a single
 * pass of primary-key reads with no joins.
 *
 * The wording is the record's key and is deliberately not repeated inside the
 * value — storing it twice tripled the table on Chrome.
 */
export async function importStats(rawStatsString: string): Promise<StatsInfo> {
	const { records, statCount } = buildMatcherRecords(rawStatsString);
	const info: StatsInfo = {
		matcherCount: records.size,
		statCount,
		importedAt: new Date().toISOString(),
		format: STATS_FORMAT
	};

	const database = await openDatabase();
	await new Promise<void>((resolve, reject) => {
		const transaction = database.transaction([MATCHER_STORE, META_STORE], 'readwrite');
		transaction.oncomplete = () => {
			resolve();
		};
		transaction.onerror = () => {
			reject(transaction.error);
		};
		transaction.onabort = () => {
			reject(transaction.error);
		};

		const matchers = transaction.objectStore(MATCHER_STORE);
		matchers.clear();
		// Queued without awaiting each put — IndexedDB runs them in order and the
		// transaction's completion is the only thing worth waiting on.
		for (const [key, candidates] of records) matchers.put(candidates, key);
		transaction.objectStore(META_STORE).put(info, STATS_META_KEY);
	});

	matcherCache.clear();
	return info;
}

/**
 * Whether a usable stat table is in place. False when `importStats` has never
 * run, when it was cleared, and when what is stored predates the current
 * encoding — so it is the check to gate a first-run import on.
 */
export async function hasStats(): Promise<boolean> {
	const info = await getStatsInfo();
	return info != null && info.format === STATS_FORMAT && info.matcherCount > 0;
}

/** What was imported and when, or `undefined` if `importStats` has never run. */
export async function getStatsInfo(): Promise<StatsInfo | undefined> {
	const database = await openDatabase();
	const transaction = database.transaction(META_STORE, 'readonly');
	return await promisify<StatsInfo | undefined>(
		transaction.objectStore(META_STORE).get(STATS_META_KEY)
	);
}

/** Drops the stat table. `generateSearchUrl` then produces no stat filters. */
export async function clearStats(): Promise<void> {
	await clearDataset(MATCHER_STORE, STATS_META_KEY);
	matcherCache.clear();
}

/**
 * Extracts base-type names, map areas and trade discriminators from
 * items.ndjson and writes them to IndexedDB, replacing whatever was there.
 *
 * Only those three things are kept — icons, ids and the rest of the file are
 * never stored, which takes 1.36MB of source down to roughly 21KB.
 */
export async function importItems(rawItemsString: string): Promise<ItemsInfo> {
	const data = buildItemData(rawItemsString);
	const info: ItemsInfo = {
		baseTypeCount: data.baseTypes.size,
		areaCount: data.areas.size,
		discriminatorCount: data.discriminators.size,
		importedAt: new Date().toISOString(),
		format: ITEMS_FORMAT
	};

	const database = await openDatabase();
	await new Promise<void>((resolve, reject) => {
		const transaction = database.transaction([ITEM_STORE, META_STORE], 'readwrite');
		transaction.oncomplete = () => {
			resolve();
		};
		transaction.onerror = () => {
			reject(transaction.error);
		};
		transaction.onabort = () => {
			reject(transaction.error);
		};

		const items = transaction.objectStore(ITEM_STORE);
		items.clear();
		// Held as one record rather than a row per name: resolving a base type
		// probes ~20 word runs, and at this size the whole payload is smaller than
		// the per-row overhead of splitting it. The stat table is the other way round.
		items.put(data, ITEM_DATA_KEY);
		transaction.objectStore(META_STORE).put(info, ITEMS_META_KEY);
	});

	itemDataCache = data;
	return info;
}

/** Whether a usable base-type set is in place, on the same terms as `hasStats`. */
export async function hasItems(): Promise<boolean> {
	const info = await getItemsInfo();
	return info != null && info.format === ITEMS_FORMAT && info.baseTypeCount > 0;
}

/** What was imported and when, or `undefined` if `importItems` has never run. */
export async function getItemsInfo(): Promise<ItemsInfo | undefined> {
	const database = await openDatabase();
	const transaction = database.transaction(META_STORE, 'readonly');
	return await promisify<ItemsInfo | undefined>(
		transaction.objectStore(META_STORE).get(ITEMS_META_KEY)
	);
}

/** Drops the base-type set. Magic items then fall back to a category filter. */
export async function clearItems(): Promise<void> {
	await clearDataset(ITEM_STORE, ITEMS_META_KEY);
	itemDataCache = undefined;
}

async function clearDataset(store: string, metaKey: string): Promise<void> {
	const database = await openDatabase();
	await new Promise<void>((resolve, reject) => {
		const transaction = database.transaction([store, META_STORE], 'readwrite');
		transaction.oncomplete = () => {
			resolve();
		};
		transaction.onerror = () => {
			reject(transaction.error);
		};
		transaction.objectStore(store).clear();
		transaction.objectStore(META_STORE).delete(metaKey);
	});
}

/**
 * Base types come from `ITEM` entries marked `craftable` — uniques, gems, cards,
 * beasts and areas share the file but can never be a magic item's base.
 *
 * Discriminators are how the trade site tells apart types that share a name.
 * Areas carry the value the site knows them by, which is what a Chart is
 * searched on; `GEM` entries carry them too, for transfigured gems, but using
 * those needs the gem's normal variant, which is not stored.
 */
function buildItemData(rawItemsString: string): ItemData {
	const data: ItemData = { baseTypes: new Set(), areas: new Map(), discriminators: new Map() };

	for (const line of rawItemsString.split('\n')) {
		if (!line.trim().length) continue;
		const item = JSON.parse(line) as {
			name: string;
			namespace: string;
			craftable?: unknown;
			tradeDisc?: string;
		};

		if (item.namespace === 'AREA') {
			if (item.tradeDisc) data.areas.set(item.name, item.tradeDisc);
			continue;
		}
		if (item.namespace !== 'ITEM') continue;

		if (item.craftable) data.baseTypes.add(item.name);
		if (item.tradeDisc) data.discriminators.set(item.name, item.tradeDisc);
	}

	return data;
}

function buildMatcherRecords(rawStatsString: string): {
	records: Map<string, StoredCandidate[]>;
	statCount: number;
} {
	const byKey = new Map<string, StoredCandidate[]>();
	let statCount = 0;

	for (const line of rawStatsString.split('\n')) {
		if (!line.trim().length) continue;

		const parsed = JSON.parse(line) as SourceStat | { stats: SourceStat[] };
		// A line is either one stat or a group of stats sharing a wording, where
		// awakened-poe-trade picks between them using the item's category. Without
		// the item database that choice isn't available, so all of a group's stats
		// become candidates and the modifier type decides.
		const stats = 'stats' in parsed ? parsed.stats : [parsed];

		for (const stat of stats) {
			statCount += 1;
			const packed = packTradeIds(stat.trade.ids);
			if (!packed) continue;

			for (const matcher of stat.matchers) {
				const candidate: StoredCandidate = { ...packed };
				if ((stat.better ?? 1) !== 1) candidate.b = stat.better;
				if (matcher.negate) candidate.n = 1;
				if (matcher.value != null) candidate.v = matcher.value;
				// `advanced` is the same wording as the game prints it with Advanced
				// Item Descriptions on, so both spellings must reach the same stat.
				for (const key of [matcher.string, matcher.advanced]) {
					if (key == null) continue;
					const existing = byKey.get(key);
					if (existing) {
						existing.push(candidate);
					} else {
						byKey.set(key, [candidate]);
					}
				}
			}
		}
	}

	return { records: byKey, statCount };
}

/**
 * Trade ids always read `<modType>.<suffix>`, so the prefix is recoverable and
 * never stored. Nearly every stat uses one suffix under all of its types, so
 * that case keeps the suffix once against a bitmask; the few stats whose ids
 * differ per type fall back to a plain map.
 *
 * Returns undefined for stats reachable only under a type this module never
 * queries — they would never be read, so they are not stored at all.
 */
function packTradeIds(ids: Record<string, string[]>): StoredCandidate | undefined {
	const entries = Object.entries(ids)
		.filter(([modType, tradeIds]) => tradeIds.length && MOD_TYPE_BITS.includes(modType))
		.map(([modType, tradeIds]) => [modType, tradeIds[0].slice(modType.length + 1)] as const);
	if (!entries.length) return undefined;

	if (entries.every(([, suffix]) => suffix === entries[0][1])) {
		let mask = 0;
		for (const [modType] of entries) mask |= 1 << MOD_TYPE_BITS.indexOf(modType);
		return { s: entries[0][1], t: mask };
	}

	return { x: Object.fromEntries(entries) };
}

function tradeIdFor(candidate: StoredCandidate, modType: string): string | undefined {
	if (candidate.x) {
		const suffix = candidate.x[modType];
		return suffix != null ? `${modType}.${suffix}` : undefined;
	}
	const bit = MOD_TYPE_BITS.indexOf(modType);
	if (bit < 0 || !(candidate.t! & (1 << bit))) return undefined;
	return `${modType}.${candidate.s}`;
}

// #endregion

// #region stat lookup

/** Match strings already read this session, so repeat price-checks stay in memory. */
const matcherCache = new Map<string, StoredCandidate[] | undefined>();

/** Read once per session — it is one row, and every magic name probes it ~20 times. */
let itemDataCache: ItemData | undefined;

let databasePromise: Promise<IDBDatabase> | undefined;

function openDatabase(): Promise<IDBDatabase> {
	if (databasePromise) return databasePromise;

	databasePromise = new Promise<IDBDatabase>((resolve, reject) => {
		if (typeof indexedDB === 'undefined') {
			reject(
				new Error('IndexedDB is unavailable — awakened-poe-utils stat lookup needs a browser')
			);
			return;
		}

		const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
		request.onupgradeneeded = () => {
			const database = request.result;
			// Records are packed against MOD_TYPE_BITS, so a version bump means the
			// encoding moved and anything already stored is unreadable. Drop it and
			// let the caller re-import rather than decode two formats.
			// Additive only: adding a store must not destroy an unrelated table that
			// is still current. Stale encodings are handled by the format check in
			// `hasStats`/`hasItems` instead, which asks the caller to re-import.
			//
			// Every store uses out-of-line keys, so no key string is duplicated
			// inside the value it identifies.
			for (const store of [MATCHER_STORE, ITEM_STORE, META_STORE]) {
				if (!database.objectStoreNames.contains(store)) database.createObjectStore(store);
			}
		};
		request.onsuccess = () => {
			resolve(request.result);
		};
		request.onerror = () => {
			reject(request.error);
		};
	});

	return databasePromise;
}

function promisify<T>(request: IDBRequest<T>): Promise<T> {
	return new Promise<T>((resolve, reject) => {
		request.onsuccess = () => {
			resolve(request.result);
		};
		request.onerror = () => {
			reject(request.error);
		};
	});
}

async function readMatchers(keys: string[]): Promise<void> {
	const missing = keys.filter((key) => !matcherCache.has(key));
	if (!missing.length) return;

	const database = await openDatabase();
	const store = database.transaction(MATCHER_STORE, 'readonly').objectStore(MATCHER_STORE);
	// All reads ride one transaction, so the whole item costs a single round trip.
	const records = await Promise.all(
		missing.map((key) => promisify<StoredCandidate[] | undefined>(store.get(key)))
	);

	missing.forEach((key, index) => matcherCache.set(key, records[index]));
}

async function readItemData(): Promise<ItemData | undefined> {
	if (itemDataCache) return itemDataCache;

	const database = await openDatabase();
	const store = database.transaction(ITEM_STORE, 'readonly').objectStore(ITEM_STORE);
	const stored = await promisify<ItemData | undefined>(store.get(ITEM_DATA_KEY));
	if (stored?.baseTypes?.size) itemDataCache = stored;
	return itemDataCache;
}

/**
 * Recovers the base type from a magic item's name. The game prints magic items
 * as `<prefix> <base type> <suffix>` with no separator — `Experimenter's
 * Quicksilver Flask of the Impala` — so the base is found by testing every run
 * of consecutive words against the imported base types and keeping the longest
 * hit. Longest matters: `Quicksilver Flask` must win over `Flask`.
 *
 * Returns undefined when nothing matches or `importItems` has not run.
 */
export async function findBaseType(name: string): Promise<string | undefined> {
	const baseTypes = (await readItemData())?.baseTypes;
	if (!baseTypes) return undefined;

	// Chinese and Japanese do not separate words with spaces, so fall back to
	// testing runs of characters instead.
	const separator = name.includes(' ') ? ' ' : '';
	const words = name.split(separator);

	let longest: string | undefined;
	for (let start = 0; start < words.length; start += 1) {
		for (let end = start; end < words.length; end += 1) {
			const candidate = words.slice(start, end + 1).join(separator);
			if (baseTypes.has(candidate) && (longest == null || candidate.length > longest.length)) {
				longest = candidate;
			}
		}
	}
	return longest;
}

/** Fallback order when a stat has no trade id for the modifier's own type. */
const MOD_TYPE_FALLBACKS: ReadonlyArray<string> = [
	'explicit',
	'implicit',
	'fractured',
	'crafted',
	'enchant'
];

/**
 * Which rolls to leave written out rather than replace with `#`, most-replaced
 * first — a port of awakened-poe-trade's PLACEHOLDER_MAP. Most stats are indexed
 * with every roll as `#`, but some bake one in ("Adds 1 to Maximum Life per..."),
 * so each combination is tried until the table recognises one.
 */
const PLACEHOLDER_COMBINATIONS: ReadonlyArray<ReadonlyArray<ReadonlyArray<number>>> = [
	[[]],
	[[0], []],
	[[0, 1], [0], [1], []],
	[[0, 1, 2], [1, 2], [0, 2], [0, 1], [2], [1], [0]],
	[
		[0, 1, 2, 3],
		[1, 2, 3],
		[0, 2, 3],
		[0, 1, 3],
		[0, 1, 2],
		[2, 3],
		[1, 3],
		[1, 2],
		[0, 3],
		[0, 2],
		[0, 1]
	]
];

interface LookupAttempt {
	key: string;
	/** Rolls still written as `#` in `key`, and so still free to filter on. */
	rolls: number[];
	/** Bounds for those rolls, when the item was copied with Advanced Item Descriptions. */
	bounds: DamageRoll[];
}

/** Every spelling of a modifier worth trying against the table, best first. */
function lookupAttempts(modifier: ParsedModifier): LookupAttempt[] {
	const rollStrings: string[] = [];
	const rolls: number[] = [];

	const template = modifier.text.replace(/\(\)/gm, '').replace(ROLL_PATTERN, (_, value: string) => {
		rollStrings.push(value);
		rolls.push(Number(value));
		return '#';
	});

	if (rolls.length >= PLACEHOLDER_COMBINATIONS.length) {
		return [{ key: modifier.text, rolls: [], bounds: [] }];
	}

	// Bounds only line up with rolls when the game printed one for every roll.
	const bounds = modifier.bounds?.length === rolls.length ? modifier.bounds : undefined;

	const attempts = PLACEHOLDER_COMBINATIONS[rolls.length].map((keepLiteral) => {
		let placeholder = -1;
		const key = template.replace(/#/gm, () => {
			placeholder += 1;
			return keepLiteral.includes(placeholder) ? rollStrings[placeholder] : '#';
		});
		return {
			key,
			rolls: rolls.filter((_, index) => !keepLiteral.includes(index)),
			bounds: (bounds ?? []).filter((_, index) => !keepLiteral.includes(index))
		};
	});

	// Stats with no roll at all are indexed verbatim, e.g. "Cannot be Frozen".
	attempts.push({ key: modifier.text, rolls: [], bounds: [] });
	return attempts;
}

export interface ResolvedStat {
	tradeId: string;
	/** The table's wording for this stat, e.g. `# to maximum Life`. */
	statText: string;
	/** 1 when a higher roll is better, -1 when lower is better, 0 when neither. */
	better: number;
	/** The roll to filter on — the average when a stat carries two (`Adds # to #`). */
	roll?: number;
	/** The affix's own possible range, when the item text supplied it. */
	bounds?: DamageRoll;
	/** The affix rolls in decimals. */
	decimals: boolean;
}

/**
 * Resolves every modifier on an item in one batch, so the whole item costs one
 * IndexedDB transaction rather than one per modifier.
 */
async function resolveStats(
	modifiers: readonly ParsedModifier[]
): Promise<Map<ParsedModifier, ResolvedStat>> {
	const attemptsByModifier = new Map(
		modifiers.map((modifier) => [modifier, lookupAttempts(modifier)])
	);
	const keys = [...new Set([...attemptsByModifier.values()].flat().map((attempt) => attempt.key))];
	await readMatchers(keys);

	const resolved = new Map<ParsedModifier, ResolvedStat>();
	for (const [modifier, attempts] of attemptsByModifier) {
		for (const attempt of attempts) {
			const found = pickCandidate(matcherCache.get(attempt.key), modifier.type);
			if (!found) continue;
			resolved.set(modifier, describeRoll(found, attempt, modifier));
			break;
		}
	}
	return resolved;
}

function pickCandidate(
	candidates: StoredCandidate[] | undefined,
	modType: ModifierType
): { tradeId: string; candidate: StoredCandidate } | undefined {
	if (!candidates) return undefined;

	for (const type of [modType, ...MOD_TYPE_FALLBACKS]) {
		for (const candidate of candidates) {
			const tradeId = tradeIdFor(candidate, type);
			if (tradeId != null) return { tradeId, candidate };
		}
	}
	return undefined;
}

function describeRoll(
	found: { tradeId: string; candidate: StoredCandidate },
	attempt: LookupAttempt,
	modifier: ParsedModifier
): ResolvedStat {
	const { candidate } = found;
	const average = (values: number[]) =>
		values.length === 2 ? (values[0] + values[1]) / 2 : values[0];

	let roll: number | undefined = attempt.rolls.length ? average(attempt.rolls) : undefined;
	let bounds = attempt.bounds.length
		? {
				min: average(attempt.bounds.map((bound) => bound.min)),
				max: average(attempt.bounds.map((bound) => bound.max))
			}
		: undefined;

	if (candidate.n && roll != null) {
		roll = -roll;
		if (bounds) bounds = { min: -bounds.max, max: -bounds.min };
	}
	// Wordings like "Gain a Power Charge on Critical Strike" carry no number
	// because the roll is implied; the table records what it is.
	if (roll == null) roll = candidate.v;

	return {
		tradeId: found.tradeId,
		statText: attempt.key,
		better: candidate.b ?? 1,
		roll,
		bounds,
		decimals: modifier.decimals ?? false
	};
}

// #endregion

// #region url building

/**
 * Widens a roll by the greater of 5% of the affix's own roll range and a flat
 * step — 1 for an affix that rolls whole numbers, 0.1 for one that rolls
 * decimals. Scaling to the range rather than to the value keeps a tight affix
 * tight: 92 out of 80–99 becomes 91–93, not 87–97.
 *
 * Properties like armour or dps have no roll range, so the item's own value
 * stands in for one. Same for a modifier on an item copied without Advanced
 * Item Descriptions, where the game prints no bounds.
 *
 * Rounds outwards, so the item's own roll always falls inside the result, then
 * clamps to what the affix can actually produce — no point searching for rolls
 * the modifier cannot make.
 */
export function defaultRange(value: number, context: RangeContext): SearchRange {
	const spread = context.bounds ? context.bounds.max - context.bounds.min : Math.abs(value);
	const delta = Math.max(spread * 0.05, context.decimals ? 0.1 : 1);

	const precision = context.decimals ? 100 : 1;
	const round = (bound: number, direction: 'down' | 'up') => {
		const scaled = bound * precision;
		// Snap first: 1.4 - 0.1 lands on 1.2999999999999998, which would floor to 1.29.
		if (Math.abs(scaled - Math.round(scaled)) < 1e-6) return Math.round(scaled) / precision;
		return (direction === 'down' ? Math.floor(scaled) : Math.ceil(scaled)) / precision;
	};

	const min = round(value - delta, 'down');
	const max = round(value + delta, 'up');
	if (!context.bounds) return { min, max };

	// Legacy items can roll outside what their affix now offers, so the item's
	// own value widens the clamp rather than being excluded by it.
	return {
		min: Math.max(min, Math.min(context.bounds.min, value)),
		max: Math.min(max, Math.max(context.bounds.max, value))
	};
}

/**
 * Properties the game always prints with decimals, even when the value lands on
 * a whole number — `Critical Strike Chance: 8.00%` parses to 8, but a ±1 step
 * on it would be absurd.
 */
const DECIMAL_PROPERTIES: ReadonlySet<string> = new Set([
	'criticalStrikeChance',
	'attacksPerSecond',
	'dps',
	'pdps',
	'edps'
]);

interface TradeQueryFilter {
	min?: number;
	max?: number;
	option?: string;
}

/**
 * The trade site accepts a plain name, or a name paired with a discriminator
 * when several types share it — `{ discriminator: 'chart', option: '25747' }`.
 */
type TradeName = string | { discriminator: string; option: string };

interface TradeQuery {
	query: {
		status: { option: string };
		name?: string;
		type?: TradeName;
		stats: Array<{
			type: 'and';
			filters: Array<{ id: string; value?: TradeQueryFilter; disabled?: boolean }>;
		}>;
		filters: Record<string, { filters: Record<string, TradeQueryFilter> }>;
	};
	sort: { price: 'asc' };
}

/**
 * Turns a parsed item into an official trade-site search URL. Every numeric
 * filter is widened by `options.range` rather than pinned to the exact roll.
 *
 * Async because the stat filters come from the IndexedDB table that
 * `importStats` populates. With no table imported the URL still builds — it
 * just carries no per-modifier filters, and every modifier lands in
 * `options.unresolved`.
 */
export async function generateSearchUrl(
	item: ParsedItem,
	league: string = 'Standard',
	baseUrl: string = 'https://www.pathofexile.com',
	options: SearchUrlOptions = {}
): Promise<string> {
	const range = options.range ?? defaultRange;
	const withStats = options.statFilters ?? true;
	const withProperties = options.propertyFilters ?? true;

	const query: TradeQuery = {
		query: {
			status: { option: options.status ?? 'securable' },
			stats: [{ type: 'and', filters: [] }],
			filters: {}
		},
		sort: { price: 'asc' }
	};

	const setFilter = (group: string, name: string, value: TradeQueryFilter) => {
		query.query.filters[group] ??= { filters: {} };
		query.query.filters[group].filters[name] = value;
	};
	// A zero is the absence of the property (a weapon with no elemental damage has
	// edps 0), not something worth searching a window around.
	const setRange = (group: string, name: string, value: number | undefined, field: string) => {
		if (value == null || value === 0) return;
		const decimals = !Number.isInteger(value) || DECIMAL_PROPERTIES.has(field);
		setFilter(group, name, range(value, { field, source: 'property', decimals }));
	};

	// A magic item's nameplate is one line of prefix + base + suffix, so unlike a
	// rare it has no base-type line to read; it has to be recovered from the name.
	const itemData = await readItemData();
	const baseType =
		item.baseType ?? (item.rarity === 'Magic' ? await findBaseType(item.name) : undefined);

	applyIdentity(item, query, setFilter, baseType, itemData);

	if (withProperties) {
		setRange('misc_filters', 'ilvl', item.itemLevel, 'itemLevel');
		setRange('misc_filters', 'quality', item.quality, 'quality');
		setRange('misc_filters', 'gem_level', item.gemLevel, 'gemLevel');
		setRange('misc_filters', 'stack_size', item.stackSize, 'stackSize');
		setRange('map_filters', 'map_tier', item.mapTier, 'mapTier');
		setRange('map_filters', 'map_iiq', item.mapItemQuantity, 'mapItemQuantity');
		setRange('map_filters', 'map_iir', item.mapItemRarity, 'mapItemRarity');
		setRange('map_filters', 'map_packsize', item.mapMonsterPackSize, 'mapMonsterPackSize');
		setRange('map_filters', 'chart_sulphur', item.chartSulphur, 'chartSulphur');
		setRange('map_filters', 'area_level', item.areaLevel, 'areaLevel');
		setRange('armour_filters', 'ar', item.properties.armour, 'armour');
		setRange('armour_filters', 'ev', item.properties.evasion, 'evasion');
		setRange('armour_filters', 'es', item.properties.energyShield, 'energyShield');
		setRange('armour_filters', 'ward', item.properties.ward, 'ward');
		setRange('armour_filters', 'block', item.properties.blockChance, 'blockChance');
		setRange('weapon_filters', 'dps', item.properties.dps, 'dps');
		setRange('weapon_filters', 'pdps', item.properties.pdps, 'pdps');
		setRange('weapon_filters', 'edps', item.properties.edps, 'edps');
		setRange(
			'weapon_filters',
			'crit',
			item.properties.criticalStrikeChance,
			'criticalStrikeChance'
		);
		setRange('weapon_filters', 'aps', item.properties.attacksPerSecond, 'attacksPerSecond');

		if (item.sockets) {
			if (item.sockets.count > 0)
				setFilter('socket_filters', 'sockets', { min: item.sockets.count });
			if (item.sockets.links > 1) setFilter('socket_filters', 'links', { min: item.sockets.links });
		}

		setFilter('misc_filters', 'corrupted', { option: String(item.isCorrupted) });
		if (item.isMirrored) setFilter('misc_filters', 'mirrored', { option: 'true' });
		if (item.isSplit) setFilter('misc_filters', 'split', { option: 'true' });
		if (item.isUnidentified) setFilter('misc_filters', 'identified', { option: 'false' });
	}

	if (withStats) {
		// Influence isn't a modifier line — the game prints it as its own section —
		// so it has to be added to the stat block separately, as a pseudo stat.
		for (const influence of item.influences) {
			query.query.stats[0].filters.push({
				id: `pseudo.pseudo_has_${influence.toLowerCase()}_influence`
			});
		}

		const resolvedStats = await resolveStats(item.modifiers);
		for (const modifier of item.modifiers) {
			const resolved = resolvedStats.get(modifier);
			if (!resolved) {
				options.unresolved?.push(modifier.text);
				continue;
			}
			query.query.stats[0].filters.push({
				id: resolved.tradeId,
				value:
					resolved.roll != null
						? range(resolved.roll, {
								field: resolved.tradeId,
								source: 'modifier',
								stat: resolved.statText,
								better: resolved.better,
								decimals: resolved.decimals,
								bounds: resolved.bounds
							})
						: undefined
			});
		}
	}

	const endpoint = `${baseUrl.replace(/\/$/, '')}/trade/search/${encodeURIComponent(league)}`;
	return `${endpoint}?q=${encodeURIComponent(JSON.stringify(query))}`;
}

/** The trade site's discriminator for the generic map base, which carries none of its own. */
const MAP_DISCRIMINATOR = 'map';

/**
 * Pairs a type with a discriminator where the bare name is ambiguous on the
 * trade site.
 *
 * This is what makes a specific map searchable. A Chart's own name says which
 * chart it is but not where it goes, and the trade site indexes it by the area
 * instead — so the area's own trade value becomes the type, tagged `chart`.
 * Every regular map is literally named `Map`, which needs tagging too.
 */
function discriminateType(
	item: ParsedItem,
	type: TradeName | undefined,
	itemData: ItemData | undefined
): TradeName | undefined {
	if (typeof type !== 'string') return undefined;

	const discriminator = itemData?.discriminators.get(type);
	const area = item.mapArea != null ? itemData?.areas.get(item.mapArea) : undefined;
	if (discriminator && area) {
		return { discriminator, option: area };
	}
	if (discriminator) {
		return { discriminator, option: type };
	}
	if (type === 'Map') {
		return { discriminator: MAP_DISCRIMINATOR, option: type };
	}
	return undefined;
}

/**
 * Sets whichever of name/type/rarity/category actually narrows the search: a
 * rare's own name is random, so only its base type is worth searching by.
 */
function applyIdentity(
	item: ParsedItem,
	query: TradeQuery,
	setFilter: (group: string, name: string, value: TradeQueryFilter) => void,
	baseType: string | undefined,
	itemData: ItemData | undefined
): void {
	if (item.rarity === 'Unique') {
		if (!item.isUnidentified) query.query.name = item.name;
		query.query.type = baseType ?? item.name;
	} else if (item.rarity === 'Rare') {
		query.query.type = baseType;
	} else if (item.rarity === 'Magic') {
		// Undefined when items.ndjson has not been imported, which falls through to
		// the category filter below.
		query.query.type = baseType;
	} else {
		query.query.type = baseType ?? item.name;
	}

	const discriminated = discriminateType(item, query.query.type, itemData);
	if (discriminated) query.query.type = discriminated;

	// Only gear has a unique/non-unique distinction; gems, currency and cards
	// would be filtered down to nothing by it.
	if (item.rarity === 'Normal' || item.rarity === 'Magic' || item.rarity === 'Rare') {
		setFilter('type_filters', 'rarity', { option: 'nonunique' });
	}
	if (query.query.type == null) {
		const category = item.itemClass && ITEM_CLASS_TO_TRADE_CATEGORY.get(item.itemClass);
		if (category) setFilter('type_filters', 'category', { option: category });
	}
}

// #endregion
