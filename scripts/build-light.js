// Build themes/koipop-light.json from themes/koipop-dark.json.
//
// The dark theme is the source of truth. This script maps each dark colour to
// its role on the light end of the same grey scale, so a change to the dark
// theme only needs `npm run build:light` to carry across.
//
// Usage: node scripts/build-light.js [--strict]
//   --strict  keep the original accent colours for text (for comparison only;
//             orange, green, yellow and cyan are unreadable on white).

const fs = require("node:fs");
const path = require("node:path");

const STRICT = process.argv.includes("--strict");
const root = path.join(__dirname, "..");
const dark = JSON.parse(fs.readFileSync(path.join(root, "themes/koipop-dark.json"), "utf8"));

// Greys: dark role -> light role. Only colours already in the Koipop scale.
const GREY = {
	"#191b1f": "#f1f2f4", // shell and title bar: the recessed tray
	"#22252a": "#ffffff", // editor, side bar, panel
	"#2e3238": "#f1f2f4", // raised surfaces: activity bar, status bar, widgets, active tab, line highlight
	"#393e46": "#d5d8dd88", // soft highlights: inactive selection, word highlight
	"#454b54": "#d5d8dd", // borders, hover, selection
	"#abb1ba": "#454b54", // secondary text, comments, punctuation
	"#d5d8dd": "#abb1ba",
	"#f1f2f4": "#22252a", // primary text
	"#ffffff": "#191b1f", // strong text: variables, active line number
	"#000000": "#d5d8dd", // shadow
};

// Faint text stays faint: these keys keep #abb1ba instead of moving to #454b54.
const FAINT = new Set([
	"disabledForeground",
	"editorLineNumber.foreground",
	"input.placeholderForeground",
	"gitDecoration.ignoredResourceForeground",
	"list.deemphasizedForeground",
	"titleBar.inactiveForeground",
	"editorOverviewRuler.bracketMatchForeground",
	"minimap.selectionOccurrenceHighlight",
	"editorCodeLens.foreground",
	"editorInlayHint.foreground",
]);

// Text on an accent background stays white.
const ON_ACCENT = new Set([
	"activityBarBadge.foreground",
	"statusBar.debuggingForeground",
	"statusBarItem.errorForeground",
	"statusBarItem.warningForeground",
	"inputOption.activeForeground",
	"inputValidation.errorForeground",
	"inputValidation.infoForeground",
	"inputValidation.warningForeground",
	"button.foreground",
	"list.activeSelectionForeground",
	"list.activeSelectionIconForeground",
	"editorCursor.background",
]);

// Accents used as text, tuned by eye on white (Koipop Light tuner): each keeps
// its dark-theme hue with as little lightness taken off as reads well.
// Accent backgrounds (buttons, badges, selections) keep the dark-theme values.
const TEXT_ACCENT = STRICT
	? {}
	: {
			"#ffe01a": "#baa30b", // yellow
			"#ffb21a": "#faad0c", // orange
			"#92f416": "#89e70b", // green
			"#15f4e5": "#10e2d4", // cyan
			"#f047ff": "#e53af5", // purple
			"#2f78e5": "#1964cf", // blue
			"#e5352f": "#d41f1f", // red
			"#f2d7a0": "#faad0c", // sand (warning icon) -> orange, like other warnings
		};

// Terminal: black and white swap ends; colours follow TEXT_ACCENT.
const TERMINAL = {
	"terminal.foreground": "#22252a",
	"terminal.ansiBlack": "#22252a",
	"terminal.ansiBrightBlack": "#454b54",
	"terminal.ansiWhite": "#abb1ba",
	"terminal.ansiBrightWhite": "#d5d8dd",
	"terminalCursor.foreground": "#191b1f",
};

const split = c => [c.slice(0, 7).toLowerCase(), c.slice(7)];

// A key is "text-like" if the colour is drawn as text, an icon or a thin marker.
const isBackground = key => /background|Background/.test(key) && !/Gutter|gutter/.test(key);

function mapColor(value, key = "") {
	const [hex, alpha] = split(value);
	if (key in TERMINAL) return TERMINAL[key];
	if (ON_ACCENT.has(key)) return value;
	if (hex === "#abb1ba" && FAINT.has(key)) return value;
	if (hex in TEXT_ACCENT && !isBackground(key)) return TEXT_ACCENT[hex] + alpha;
	if (hex in GREY) {
		const mapped = GREY[hex];
		// Keep any alpha the dark theme used, unless the mapping sets its own.
		return mapped.length === 9 ? mapped : mapped + alpha;
	}
	return value; // blue, red, pink and accent backgrounds stay the same
}

const colors = {};
for (const [key, value] of Object.entries(dark.colors)) colors[key] = mapColor(value, key);

const tokenColors = dark.tokenColors.map(rule => (rule.settings.foreground ? { ...rule, settings: { ...rule.settings, foreground: mapColor(rule.settings.foreground, "token") } } : rule));

const semanticTokenColors = Object.fromEntries(Object.entries(dark.semanticTokenColors).map(([k, v]) => [k, typeof v === "string" ? mapColor(v, "token") : v]));

// Light-only keys: VS Code's light defaults that would bring in colours outside the Koipop scale.
Object.assign(colors, {
	"editor.rangeHighlightBackground": "#d5d8dd88", // default is yellow
});

const light = {
	$schema: dark.$schema,
	name: "Koipop Light",
	type: "light",
	colors,
	semanticHighlighting: dark.semanticHighlighting,
	semanticTokenColors,
	tokenColors,
};

const out = process.argv.find(a => a.endsWith(".json")) ?? path.join(root, "themes/koipop-light.json");
fs.writeFileSync(out, JSON.stringify(light, null, "\t") + "\n");
console.log(`Wrote ${path.relative(process.cwd(), out)}${STRICT ? " (strict accents)" : ""}`);
