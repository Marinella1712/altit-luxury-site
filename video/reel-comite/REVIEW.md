# REVIEW — reel "ועד הבית vs Altit Luxury" (HE, 1080x1920, 22.6 s)

- Built: storyline A (committee chaos -> Altit answers in the chat). Not built: B "the plaque" (slow luxury pull-back), C "numbers falling" (kinetic stats on the beat).
- Creative calls: Altit's reply is a gold bubble inside the chat that grows into the next scene; the real plaque photo opens inside it. Stats one at a time (no KPI grid). Copy verbatim from the site's Hebrew i18n; chat lines are an illustrative scene.
- Measured: `hyperframes check` passes (0 errors, 0 warnings); SFX onsets land on the bubbles, stats and phone; loudness -19 LUFS, true peak -5.2 dBTP, no clipping. Sound was measured, not heard.
- No music bed: no music source in this environment. Add a track in the Instagram app when posting.
- Weakest shot: the plaque at 2.6x zoom (7.9-8.6 s) is soft because the source photo is 1200 px wide; a higher-resolution photo of the plaque would fix it.
- Fonts: Heebo + Frank Ruhl Libre from Fontsource (assets/fonts); GSAP vendored in assets/vendor (CDN blocked here).

## v2 — readability and motion pass (24.8 s)
- Chat text 44 -> 54 px; readable messages ~0.6 s apart, then a burst with a decaying camera shake.
- Bubbles land on a spring (back.out 1.4); the typing bubble morphs into the gold answer (clip widen + colour).
- Name per letter; 10+ and 98% count up; 24/7 rises per character from a mask; zoom through 24/7 into the claim.
- Stats 1.4 s each; render-time motion blur on (data-motion-blur) for whips, camera moves and the zoom-through.
- prompt-motion.com could not be read (blocked by the environment's network policy); techniques come from the HyperFrames motion reference.
- check: 0 errors. line_unread on the per-letter name is a false positive (letters counted as words): marked data-hold.

## v3 — copy rewritten in natural Israeli Hebrew
- Feedback: v2 wording read as translated. Group "דיירי הבניין", first names, colloquial lines; claim "בלי ועד בית, בלי כאבי ראש."; tagline "הבניין שלכם בידיים טובות". Numbers and phone unchanged.
