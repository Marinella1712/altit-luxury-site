# SPEC — Reel Instagram « Flip the switch » (Altit Luxury, hébreu)

REFERENCE: instagram.com/reel/Deu2GxfJeEc (neuva_au, 9.2 s): cream wall in daylight, a large OFF
         pill switch near the ceiling; someone flips it, it lights up green and the poster
         "NEUVA IS LIVE." is on the wall at once; she walks off; the wall goes back to OFF (loop).
GOAL:    a building owner in Eilat sees the switch flip and "peace of mind, switched on" light up
         on the wall with the real Altit plaque; they remember the phone number.
OUTPUT:  HyperFrames, 1080 x 1920, 30 fps, Hebrew RTL.
TIME:    9.0 s x 30 = 270 frames, loops (last frame = frame 0). No person: motion design only
         (no live-action source, AI video credits unavailable). SFX only; music added in Instagram.

LOOK:    the reference's room, in Altit's palette.
         wall: warm plaster #E8DED0, daylight from upper left (soft falloff 0.35 -> 0),
         window light patch, palm-leaf shadows rgba(80,60,40,.10) blurred 7 px swaying ±2.5°.
         ceiling #F4F0EA with a linear light (lights with the switch), oak floor #BFA58A from y 1800.
         switch: 400 x 176 pill, plate #DCD4C8, track OFF #5B5B60 / ON #121219, knob 140 px,
         ON knob gold #D9BC8E + gold spill on the wall (the reference's green glow, made gold).
         poster: 860 x 1220, ink #101017, brass frame 8 px #B8946A, wall shadow 0 24 60 .28.
         type: Frank Ruhl Libre 900 210 px (headline), Heebo 500 44 px (sub), Heebo 700 36 px (pill).
OBJECTS: the pill switch (OFF/ON), the poster with the real logo (light version) and the real
         building photo with the Altit plaque.

COPY:    headline "השקט / הופעל." (peace of mind / switched on) — a proposal, edit in poster vars;
         sub "ניהול ואחזקת מבנים — אילת" (site) + "לבעלי דירות בבתים משותפים";
         pill "054-792-3868".

MOTION:  flip power4.out 0.18 s; camera power3.inOut; creeps power1.inOut / none.
         Poster lights like a sign: on at f32, 35% at f33, on at f34. No fades, no slides.

SHOTS:
  0.00-1.00  close on the OFF switch (camera x1.70 -> 1.74 creep), empty wall below.
  1.00       click: knob slides, track goes ink, knob gold, spill on the wall.
  1.07-1.13  poster lights up (flicker), room +10% warm light.
  1.35-2.55  camera pulls back to x1.00: whole wall, switch + poster.
  2.55-7.30  hold; creep x1.00 -> 1.04; leaf shadows move over wall and poster.
  7.30       click: switch OFF, poster and spill off on the same frame.
  7.60-8.90  camera pushes back to x1.70 on the switch = frame 0 (loop).

SAFE:    all poster text between y 520 and 1310; right edge <= 906 px.
BANNED:  dark void; floating particles; text fading/sliding in; logo docked in a corner;
         KPI grid; titles moving after landing; emoji.
QA:      t=0.5 (OFF hook), 1.2 (ON + poster lit), 2.0 (pull back), 4.0 (full poster),
         7.4 (off), 8.95 (= frame 0).
