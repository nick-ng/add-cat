# awakened-poe-utils

Parses a Path of Exile item copied to the clipboard, and turns it into an
official trade-site search URL.

Distilled from
[awakened-poe-trade](https://github.com/SnosMe/awakened-poe-trade). No
dependencies, no build step, browser-only. English client text.

Two of the four entry points read data files that ship with that repo; you
import those once and they live in IndexedDB.

```ts
import {
	generateSearchUrl, // object     -> trade URL
	importItems, // one-time setup
	importStats,
	parseItemString // item text  -> object
} from './awakened-poe-utils.ts';
```

---

## Setup

Both imports take the **text** of a data file and store a reshaped version in
IndexedDB. Run them once, not on every page load — guard with `hasStats()` /
`hasItems()`.

```ts
if (!(await hasStats())) {
	await importStats(await (await fetch('/data/en/stats.ndjson')).text());
}
if (!(await hasItems())) {
	await importItems(await (await fetch('/data/en/items.ndjson')).text());
}
```

Both files come from `awakened-poe-trade/renderer/public/data/en/`. Copy them
into your app's static assets, or fetch them from wherever you host them.

### `importStats(rawStatsString)`

Maps modifier text to trade stat ids. **Without it `generateSearchUrl` produces
no per-modifier filters** — every modifier lands in `options.unresolved` instead
— so a rare item's search becomes near useless. This is the one you actually
need.

|        |                                                 |
| ------ | ----------------------------------------------- |
| source | `data/en/stats.ndjson`, ~2.3 MB                 |
| stored | ~1.0 MB payload, 11,521 keys from 8,743 stats   |
| cost   | ~350 ms once; lookups are sub-millisecond after |

Returns `{ matcherCount, statCount, importedAt, format }`. Re-importing replaces
the table wholesale.

### `importItems(rawItemsString)`

Two jobs: recovering a magic item's base type from its name, and supplying the
trade discriminators that make a **specific map searchable**. Optional, but
without it magic items fall back to a category filter (`accessory.ring`) instead
of an exact type (`Amethyst Ring`), and a Chart searches as its own name rather
than as the area it leads to.

|        |                                                        |
| ------ | ------------------------------------------------------ |
| source | `data/en/items.ndjson`, ~1.4 MB                        |
| stored | ~24 KB — 1,183 base names, 161 areas, 4 discriminators |
| cost   | ~7 ms once                                             |

Returns `{ baseTypeCount, areaCount, discriminatorCount, importedAt, format }`.

### Housekeeping

```ts
await hasStats(); // false when never imported, cleared, or stored in a stale format
await getStatsInfo(); // the full record, or undefined
await clearStats();
// hasItems / getItemsInfo / clearItems mirror these exactly
```

**Re-import each league.** The upstream repo refreshes these files (its commits
are titled `update data`); new mods get new trade ids, and stale ids silently
match nothing.

---

## `parseItemString(itemString)`

Synchronous, pure, needs no imported data. Returns a `ParsedItem`, or `null` if
the text isn't an item.

```ts
const item = parseItemString(await navigator.clipboard.readText());
```

```jsonc
{
	"itemClass": "Body Armours",
	"rarity": "Rare", // Normal | Magic | Rare | Unique | Gem | Currency | Divination Card | Quest
	"name": "Corruption Veil", // for non-rare/unique this IS the base type
	"baseType": "Astral Plate", // only when the game printed a separate line
	"isCorrupted": true, // + isUnidentified, isMirrored, isSplit,
	//   isSynthesised, isFoil, isUnmodifiable
	"influences": ["Shaper"],
	"itemLevel": 84,
	"quality": 20,
	"mapTier": 14, // + gemLevel, stackSize, areaLevel, chartSulphur,
	//   mapItemQuantity, mapItemRarity, mapMonsterPackSize
	"mapArea": "Acid Caverns", // Charts and Scrying Orbs only — where it leads
	"sockets": { "raw": "R-R-R", "count": 3, "links": 3, "white": 0 },
	"requirements": { "level": 62, "str": 180 },
	"properties": {
		"armour": 1177, // + evasion, energyShield, ward, blockChance
		"physicalDamage": { "min": 25, "max": 46 },
		"attacksPerSecond": 1.4,
		"pdps": 49.7,
		"edps": 0,
		"dps": 49.7 // computed, not printed by the game
	},
	"modifiers": [
		/* see below */
	],
	"unparsedLines": ["Wand"], // flavour text, help text, anything unclaimed
	"rawText": "Item Class: …"
}
```

Each modifier:

```jsonc
{
	"text": "+92(80-99) to maximum Life", // as printed, minus the trailing (implicit)-style tag
	"type": "explicit", // explicit|implicit|crafted|fractured|enchant|scourge|veiled
	"statText": "# to maximum Life", // rolls replaced by #
	"values": [92],
	"bounds": [{ "min": 80, "max": 99 }], // Advanced Item Descriptions only
	"decimals": true, // absent unless the affix rolls decimals
	"generation": "prefix", // Advanced Item Descriptions only, below here
	"name": "Athlete's",
	"tier": 2,
	"tags": ["Life"]
}
```

### Copy with Advanced Item Descriptions

Ctrl+Alt+C in game, not Ctrl+C. That's what makes the game print
`{ Prefix Modifier
"Athlete's" (Tier: 2) — Life }` above each mod and the
`(80-99)` bounds beside each roll. Plain copies still parse, but you lose affix
names, tiers, and every roll range — and the default range rule degrades (see
below).

---

## `generateSearchUrl(item, league?, baseUrl?, options?)`

Async, because it reads the stat table.

```ts
const unresolved: string[] = [];
const url = await generateSearchUrl(item, 'Settlers', 'https://www.pathofexile.com', {
	unresolved
});
```

| argument  | default                         |
| --------- | ------------------------------- |
| `league`  | `'Standard'`                    |
| `baseUrl` | `'https://www.pathofexile.com'` |

```ts
interface SearchUrlOptions {
	range?: (value: number, context: RangeContext) => { min: number; max: number };
	statFilters?: boolean; // default true — per-modifier filters
	propertyFilters?: boolean; // default true — ilvl, defences, dps, sockets, corrupted…
	status?: 'online' | 'securable' | 'available' | 'any'; // default 'online'
	unresolved?: string[]; // modifiers whose stat id could not be found, collected here
}
```

**Always pass `unresolved`.** It is the only signal that a modifier was silently
dropped from the search, and the first thing to check when a league update
breaks something.

### What goes into the query

| item            | search by                                                 |
| --------------- | --------------------------------------------------------- |
| Unique          | name + base type                                          |
| Rare            | base type (its own name is random)                        |
| Magic           | base type recovered from the name, else a category filter |
| everything else | name                                                      |

Non-unique gear also gets `rarity: nonunique`. Gems, currency and cards don't —
the distinction doesn't exist for them and would filter everything out.

### Specific maps

`type` is normally a plain string, but becomes `{ discriminator, option }` where
a bare name would be ambiguous on the trade site:

| item                                  | `type`                                              |
| ------------------------------------- | --------------------------------------------------- |
| `Coral Forest Chart` for Acid Caverns | `{ discriminator: 'chart', option: '21257' }`       |
| `Scrying Orb` for Toxic Sewer         | `{ discriminator: 'scrying_orb', option: '25747' }` |
| any `Map (Tier 14)`                   | `{ discriminator: 'map', option: 'Map' }`           |
| everything else                       | `"Amethyst Ring"`                                   |

Charts and Scrying Orbs are indexed by **where they lead**, not by their own
name, so the area's trade value becomes the type. The area is read off the item
text into `item.mapArea` and translated at URL time; without an items import the
type falls back to the plain name.

Every regular map is literally named `Map` — the specific map is a Chart, not a
map base. That's the shape of current game data, not a limitation here.

### The range rule

Every numeric filter is a window, not an exact value:

```
delta = max( 5% × (bounds.max − bounds.min),  affix rolls decimals ? 0.1 : 1 )
```

rounded outwards, then clamped to `bounds`. So `+92(80-99) to maximum Life`
searches **91–93**, and an affix at its ceiling — `+42(37-42)` — searches
**41–42**, never advertising a roll that can't exist.

Two cases have no bounds to scale against, and fall back to 5% of the value
itself: **item properties** (armour, dps, item level — they aren't affixes and
have no roll range) and **modifiers on plain-copied items**.

Legacy items are handled: a mod printed as `+50(37-42)` rolls above what the
affix now offers, and the clamp widens to include it rather than excluding the
very item you're pricing. Same below the floor.

To change any of this, pass your own `range`. It receives:

```ts
interface RangeContext {
	field: string; // trade id, or the ParsedItem property name
	source: 'modifier' | 'property';
	stat?: string; // '# to maximum Life'
	better?: number; // 1 higher is better, -1 lower, 0 neither
	decimals: boolean;
	bounds?: { min: number; max: number }; // the affix's own range
}
```

`better` is unused by the default rule but is there for one-sided filters — for
a higher-is-better stat you may want `{ min }` only, and no max at all.

---

# Technical details

For updating this file when awakened-poe-trade changes. Everything below is
either copied from that repo or derived from its data files.

Written against **awakened-poe-trade @ `1e2225a`** (2026-08-09).

## What was inlined, and from where

The module has no imports, so anything upstream keeps in a file has been copied
in. Each of these is a drift risk.

| in `awakened-poe-utils.ts`                                                                                                       | copied from                                                                              | breaks when               |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------- |
| `RARITIES`, `INFLUENCE_LINES`, `MODIFIER_TAGS`, `MODIFIER_INFO_TYPES`, `ELDRITCH_RANKS`, `MAP_TIER_SUFFIX`, `MODIFIER_INFO_LINE` | `renderer/public/data/en/client_strings.js`                                              | GGG rewords item text     |
| `ITEM_CLASS_TO_TRADE_CATEGORY`                                                                                                   | `pathofexile-trade.ts:12` `CATEGORY_TO_TRADE_ID`, rekeyed from category to `Item Class:` | a new item class ships    |
| `ROLL_PATTERN`                                                                                                                   | `stat-translations.ts:89`                                                                | —                         |
| `PLACEHOLDER_COMBINATIONS`                                                                                                       | `stat-translations.ts:67` `PLACEHOLDER_MAP`                                              | —                         |
| `ModifierType`                                                                                                                   | `modifiers.ts:115`                                                                       | a new mod type ships      |
| `TradeQuery` shape                                                                                                               | `pathofexile-trade.ts:87` `interface TradeRequest`                                       | GGG changes the trade API |
| `findBaseType`                                                                                                                   | `magic-name.ts:3` `magicBasetype`                                                        | —                         |
| influence pseudo ids                                                                                                             | derived: `pseudo.pseudo_has_<influence>_influence`                                       | a new influence ships     |
| `MAP_DISCRIMINATOR`                                                                                                              | `create-item-filters.ts:148`, hardcoded there too                                        | GGG renames it            |

`ITEM_CLASS_TO_TRADE_CATEGORY` is **not** a direct copy. Upstream maps its own
`ItemCategory` enum (resolved from `items.ndjson`) to trade ids; this module
maps the `Item Class:` line straight to trade ids, skipping the item database.
If an item class is missing from that map, its category filter is simply omitted
— the search gets broader, nothing breaks.

## stats.ndjson

One JSON object per line. Either a stat, or `{ resolve, stats: [...] }` grouping
stats that share a wording.

```jsonc
{ "ref": "+# to maximum Life",
  "better": 1,
  "dp": true,                                  // displayed with decimals — unused here
  "matchers": [
    { "string": "# to maximum Life" },
    { "string": "Lose # Life when you Block", "negate": true },
    { "string": "Gain a Power Charge on Critical Strike", "value": 100 },
    { "string": "…", "advanced": "…" }         // wording with Advanced Item Descriptions on
  ],
  "trade": { "ids": { "explicit": ["explicit.stat_3299347043"], "implicit": [...] } } }
```

- `negate` — this wording states the stat inverted; flip the sign of the roll.
- `value` — the wording implies a fixed roll, so there's no number in the text.
- `advanced` — an alternate spelling; both must reach the same stat.

**No roll ranges.** This file cannot tell you what an affix can roll — that only
ever comes from the item text, via Advanced Item Descriptions. If you go looking
for bounds here, they don't exist.

### How it's stored

The file is organised by stat; lookups run the other way, from item text to
trade id. So it's inverted into one IndexedDB record per **wording**, keyed by
the placeheld text (`# to maximum Life`). One primary-key read per lookup, no
joins.

```jsonc
// key:   "# to maximum Life"
// value: [ { "s": "stat_3299347043", "t": 15 } ]
```

| field | meaning                                                       |
| ----- | ------------------------------------------------------------- |
| `s`   | trade id suffix, shared across every type in `t`              |
| `t`   | bitmask over `MOD_TYPE_BITS`                                  |
| `x`   | per-type suffixes, for the few stats whose ids differ by type |
| `b`   | `better`, omitted when 1                                      |
| `n`   | negate                                                        |
| `v`   | fixed implied roll                                            |

Three deliberate reductions, all measured in Chrome:

1. **The key is not repeated inside the value.** Storing it twice took the table
   from 1.8 MB to 4.8 MB — by far the biggest factor.
2. **`<type>.` prefixes are stripped** and the shared suffix stored once against
   a bitmask. Trade ids always read `<modType>.<suffix>`, and nearly every stat
   uses one suffix under all its types.
3. **Types that can never be queried are dropped** — `pseudo`, `necropolis`,
   `imbued`. Worth ~20%.

Net: 1.03 MB written, 55% smaller than source, lookups unaffected.

> Storing the whole index as a single row was tried and rejected: every cold
> lookup pays to deserialise the entire table, measured at 4.6 ms against 0.2 ms
> for a row per wording, and it was not smaller in any run. It only wins on
> import time (18 ms vs ~350 ms), which happens once a league.
>
> Be careful measuring this yourself: `navigator.storage.estimate()` is
> quantised, lags writes, includes the HTTP cache, and reclaims deleted
> databases lazily — it reported _more_ usage after `clearStats()`. Only
> same-page back-to-back comparisons mean anything; for an absolute, serialise
> the records and measure the string.

**`MOD_TYPE_BITS` is append-only.** Bit positions are baked into every stored
record. Reordering or inserting silently corrupts every lookup — add to the end,
or bump `DATABASE_VERSION`.

## items.ndjson

Same format, five namespaces. Three things are extracted:

```jsonc
// base type — ITEM entries marked craftable (1,183)
{ "name": "Amethyst Ring", "namespace": "ITEM", "craftable": { "category": "Ring" } }

// map area — every AREA entry carries a tradeDisc (161)
{ "name": "Acid Caverns", "namespace": "AREA", "tradeDisc": "21257" }

// discriminator — ITEM entries with a tradeDisc (4)
{ "name": "Coral Forest Chart", "namespace": "ITEM", "tradeDisc": "chart" }
```

~24 KB total, held as **one record in one row** — the opposite choice from the
stat table. At this size the payload is smaller than the per-row overhead of
splitting it, and resolving a base type probes ~20 word runs, which as rows
would be 20 reads.

`findBaseType` splits the name on spaces and tests every run of consecutive
words, keeping the longest hit — `Quicksilver Flask` must beat `Flask`. Ported
from `magic-name.ts:3`, including the no-space fallback for Chinese and
Japanese.

### Discriminators

Only four ITEM entries carry one: the three Charts (`chart`) and `Scrying Orb`
(`scrying_orb`). Both kinds name an area, and the trade site indexes them by
that area — so the area's `tradeDisc` becomes the `option` and the item's own
becomes the `discriminator`. Upstream writes these as two separate special cases
(`create-item-filters.ts:87` and `:186`); here one rule covers both, because the
data already says which items work that way.

The generic `Map` base is the exception — it has no `tradeDisc`, and its `'map'`
discriminator is hardcoded, matching `create-item-filters.ts:148`.

`AREA` entries use two forms of `tradeDisc` — numeric (`"21257"`) and slug
(`"AbyssalPlain"`). Both are passed through untouched.

The area is recognised **structurally**, not by item class: a section whose
first line is bare text followed by `Area Level:` is a Chart's area block, and
`Map Area: X` is a Scrying Orb's. That keeps `parseItemString` free of data — a
regular map's section leads with `Area Level:` and is left alone.

215 `GEM` entries also carry discriminators (`alt_x`, `alt_y`) for transfigured
gems. Not stored: using them needs the gem's `normalVariant`, since the trade
site searches the base gem's name with the variant as discriminator.

## Mod text to trade id

1. Replace each roll in the modifier text with `#`, using `ROLL_PATTERN` — which
   also captures the `(80-99)` bounds printed beside it.
2. Try that against the table. If it misses, try again leaving one roll written
   out, then another combination, per `PLACEHOLDER_COMBINATIONS` — some stats
   are indexed with a roll baked into the text.
3. Fall back to the verbatim line, for stats with no roll at all
   (`Cannot be Frozen`).
4. Take the first candidate that has an id for the modifier's own type, then
   fall back through `MOD_TYPE_FALLBACKS`.

Two rolls average into one filter value: `Adds 5 to 12 Fire Damage` searches
8.5, and its bounds average the same way. That's what the trade site's
added-damage stats expect.

Every modifier on an item is resolved in **one transaction** — candidate strings
are collected first, then read together.

## What upstream does that this doesn't

Deliberate omissions. Each would need the item database, more of `stats.ndjson`,
or both:

- **Pseudo stats** — total resistance, total life. Upstream synthesises these
  across `renderer/src/web/price-check/filters/pseudo/`; here only influence
  pseudo ids are used, and those are hardcoded.
- **Transfigured gems** — the one discriminator case not covered. Needs
  `normalVariant` from `items.ndjson`, which isn't stored.
- **Option-type stats** — cluster jewel `Added Small Passive Skills grant: X`
  needs an `option` id rather than a range. Currently lands in `unresolved`.
- **Category resolution from the item database** — see the note on
  `ITEM_CLASS_TO_TRADE_CATEGORY` above.
- **Quality normalisation (`calc-q20.ts`)** — upstream compares armour/damage at
  20% quality. Raw values are used here, so a 0% and a 20% quality item of the
  same base look different.
- **Stat group resolution** — upstream picks between stats sharing a wording
  using the item's category (`_resolveTranslation`). Without the item database
  all of a group's stats become candidates and the modifier type decides, which
  can pick the wrong one where a group is genuinely ambiguous.

## Storage layout

IndexedDB `awakened-poe-utils`, version 3.

| store      | key                    | value                                  |
| ---------- | ---------------------- | -------------------------------------- |
| `matchers` | placeheld wording      | `StoredCandidate[]`                    |
| `items`    | `'craftable'`          | `{ baseTypes, areas, discriminators }` |
| `meta`     | `'stats'` \| `'items'` | the `…Info` record                     |

All out-of-line keys, so no key string is duplicated inside its own value.

**Upgrades are additive** — the handler creates missing stores and never drops
existing ones, so adding a store can't destroy a table that's still current.
Stale encodings are handled separately by `STATS_FORMAT` / `ITEMS_FORMAT`,
stored in each `…Info` record: bump one and its `has…` check reports false, so
the app re-imports over the stale rows and self-heals.

Two version numbers, two jobs:

- `DATABASE_VERSION` — the set of object stores changed.
- `STATS_FORMAT` / `ITEMS_FORMAT` — the record encoding changed.

Changing `MOD_TYPE_BITS`, the `StoredCandidate` fields, or what `buildItemData`
keeps means bumping the matching `…_FORMAT`. `ITEMS_FORMAT` is already at 2 for
exactly this reason — adding areas and discriminators changed the record shape.

## When a league update lands

1. Pull the repo, re-run both imports.
2. Diff `renderer/public/data/en/client_strings.js` against the inlined strings
   table.
3. Check `pathofexile-trade.ts` for new `CATEGORY_TO_TRADE_ID` entries and
   changes to `interface TradeRequest`.
4. Check `modifiers.ts:115` for new `ModifierType` members — a new one needs
   adding to `MOD_TYPE_BITS` (at the end) and `ModifierType`, plus a
   `STATS_FORMAT` bump.
5. Price-check a few items and read `options.unresolved`. A modifier that used
   to resolve and now doesn't is the symptom that matters.
