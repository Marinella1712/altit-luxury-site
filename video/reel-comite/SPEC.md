# SPEC — Reel Instagram « ועד הבית vs Altit Luxury » (storyline A, hébreu)

GOAL:    a building owner in Eilat sees their own chaotic house-committee WhatsApp group, then
         Altit Luxury answers in it and takes over; they remember "not a committee, real management"
         and the phone number.
OUTPUT:  HyperFrames, 1080 x 1920, 30 fps, Hebrew RTL.
TIME:    22.6 s x 30 = 678 frames. No music bed (no source in this environment): bundled SFX only;
         music is added in the Instagram app when posting.

LOOK:    brand palette from the site (css/style.css) and branding.png:
         gold #C9A87C (accent: the Altit bubble, numbers, one word per frame), gold-deep #A07B4F
         (gold text on cream), black #09090F, cream #F4EFE8, ink #1A1A24.
         Chat: wallpaper #EFE7DA flat, bubbles #FFFFFF / sent #DDF2C9, radius 28 px, tail corner 6 px,
         shadow 0 2px 0 rgba(0,0,0,.08). Heebo 500 44 px text, Heebo 700 32 px sender.
         Display: Frank Ruhl Libre 900 / 700 (Hebrew serif, matches the serif logo).
         Medium: real photographs (building entrance with the Altit plaque, Blue Space render),
         flat colour blocks cut by straight edges. No grain, no glow, no gradients.
OBJECTS: a WhatsApp-style group chat ("ועד הבית", 14 participants) that reads as a phone chat
         without any brand mark; the real Altit plaque on the real building; the real logo PNG.

MOTION:  enter expo.out / power4.out; camera power2.inOut; exits power3.in.
         Chat bubble entry: scale 0.75 -> 1 + opacity, 0.12 s from the sender's corner (registry
         chat-message measure); column scroll 0.22 s power3.out, step 168 px.
         Titles: per-word blur 6 -> 0 in 0.13 s, 0.07 s apart, no translate. Landed titles hold still.

SHOTS:
  0.00-1.60  chat  frame 0 = punched-in (x1.9) on bubble "המעלית שוב תקועה!" (the hook); hold.
  1.60-2.40  chat  camera pulls back to the whole group chat, header "ועד הבית" appears.
  2.30-4.95  chat  8 messages pile up, accelerating (0.55 s -> 0.15 s apart); pop on each.
  5.00-5.60  chat  typing indicator under gold sender "אלטיט לוקסורי".
  5.60-7.20  chat  gold bubble "מעכשיו, אנחנו מטפלים בזה." ; camera punches in x1.35 on it.
  7.20-7.90  chat  gold bubble grows past the frame (object becomes the world) ; whoosh.
  7.90-12.0  reveal  gold ground; the real plaque opens in the bubble's rect and the camera pulls
             back from x2.6 to the whole entrance; photo top edge descends to 640 px over cream;
             "אלטיט לוקסורי" + "ניהול ואחזקת מבנים — אילת". Ends with a vertical whip.
  12.0-16.8  stats  one number per 1.2 s, colour flood between grounds:
             6+ שנות ניסיון בשטח / 10+ בניינים בניהול / 98% שביעות רצון / 24/7 זמינות לחירום.
  16.8-19.2  claim  "לא ועד בית —" / "ניהול מקצועי." over cream, Blue Space photo rises below.
  19.2-22.6  end  logo wipes in, "השקט לבעלי הדירות בבתים משותפים", 054-792-3868 lands (impact),
             holds 2.3 s.

COPY:    v3: rewritten in natural spoken Israeli Hebrew (feedback: v2 read as a translation);
         numbers and phone from the site. Chat lines are an illustrative scene, not claims.

SAFE:    every word between y 168 and 1330; right edge of text <= 940 px below y 900 (action rail).

BANNED:  dark void with small floating elements; glow, particles, gradients; logo docked in a corner;
         KPI grid (stats are one at a time); everything fading and sliding up; titles moving after
         landing; emoji (no emoji font in render).

QA:      t=0 (hook readable), 2.4 (whole chat), 4.9 (chaos), 6.4 (gold bubble), 8.6 (plaque),
         11.0 (title), 12.6/13.8/15.0/16.2 (each stat), 18.5 (claim), 22.0 (end card).
