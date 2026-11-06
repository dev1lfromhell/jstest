# Overload Defense — v0.3

Playable, original HTML5 Canvas tower-defense prototype. Landscape screen, 12 build pads, 4 tower types, 10 waves, player-selected standard/risky waves, specialization paths, overdrive indicators, drag-and-drop building.

## Gameplay rebalance
- First wave intentionally remains a tutorial with five slow enemies.
- Later waves grow in size and HP; runner and tank enemies become more frequent; the tenth wave includes extra tanks.
- Risky waves have larger populations, tougher enemies, and higher gold payouts.
- Starting gold: 400 (was 520).
- Tower progression: paid levels 2 and 3 → choose one free specialization at level 3 → paid levels 4, 5 and 6.
- Upgrade costs = base tower price × 1.5, 2.7, 4.0, 5.9, 8.5 respectively, rounded up to multiples of five.
- Selling a tower refunds 60% of the money spent on it.
- Damage, range and attack cadence now improve up to level 6.

## Verification
- Chromium tests with desktop viewport and mobile/touch viewport: drag to build, starting gold, prices, insufficient-funds behavior, tutorial wave and no JS exceptions.
- Separate progression tests for level 1 through 6, free spec branch, tier-4 gate, max-level cap, invested gold and selling.
- Automated model-play sessions: a limited four-tower level-3 defense failed the risky course, whereas a larger mixed defense with upgrades and overload reached the end with no lives lost; model-play is **not a substitute** for real player balance testing.

## Caveats
- Artwork remains programmatically drawn and below the quality of the approved cartoon concept art.
- No commercial ads, monetization, in-app purchases or auto-save; no iPhone Safari or actual Android-device test for v0.3.
- Current game files are self-contained in `v03.html`, also copied to `index.html` for the default link.
