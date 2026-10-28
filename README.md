---
description: "README of the v3 garage door site (v2 plus Yelp card, BBB badge, real Yelp quotes, new logo): what changed from v1, how to preview, and the outstanding owner facts."
---

# garage-door-design-3

Version 2 of the **Lake Washington Garage Door Service** static site (v1 = `garage-door-design-1`, untouched). Plain HTML + CSS + a small JS menu toggle; no build step.


## What changed in v3 (from v2)

- **Yelp card** on the home page (own styling, no Yelp assets): name, 5.0 (28 reviews), Claimed, Garage Door Services, Open 8:00 AM - 5:00 PM (hours as listed on Yelp), Verified License, response quality Excellent, response time 10 minutes, "See us on Yelp" link.
- **BBB Accredited, rated A+ (accredited since 2015)** badge linked to the BBB profile, and "5.0 on Yelp (28 reviews)" linked.
- **Four Yelp quotes** (Trd C., Gordon N., John V., John Jacobs) verbatim from the review-sites recommendation, each with name, place and date, source Yelp and a link. They replace the unverified old-site testimonials.
- **New logo**: v1 layout with the original round badge instead of the garage icon. Files in `logos/`: `logo.png`, `logo@2x.png`, `logo-light.png`, `logo-light@2x.png` (white text for dark backgrounds), `badge.png`, `badge.webp`, `logo.svg`, `logo-light.svg`. Favicons: `favicon.ico`, `favicon.png`, `apple-touch-icon.png`, `favicon-32.png`, `favicon-192.png`.
- **Logo note**: the badge is a raster (the only source is a JPEG-quality image), so `logo.svg` embeds it as a base64 `<image>` beside live `<text>`. It will soften if scaled far above 256 px. A true vector badge needs the owner's vector source (ask Danny for the original AI/EPS/SVG file).
- Yelp quotes are excerpts of public reviews; Yelp's terms restrict copying review content, so ask reviewers or Danny for permission before launch.

## Preview

```
python3 -m http.server 8765   # then http://localhost:8765
```

(`icons.svg` is blocked on `file://`; use http.)

## What changed from v1

- **Sticky top bar** on every page (`position: sticky`, `scroll-padding-top` set so anchors are not hidden). Mobile: logo, red **Call** button (`tel:+14253017543`, always visible) and Menu button in one row; Danny's email `info@LWDoorService.com` (`mailto:`) in a bar directly beneath; nav opens as a dropdown inside the sticky bar.
- **Mobile**: layout checked at 390px, no horizontal scroll, tap targets at least 44px (buttons, nav, email, Yelp badge).
- **One years claim everywhere**: "20+ years of expertise · doing business since 2014" (hero, about, meta/OG, JSON-LD `foundingDate: 2014`, footer). No "21 years".
- **Yelp badge** "Perfect 5-Star Ratings on Yelp" linking to the Yelp listing (hero card, trust bar, home reviews, about, footer).
- **Reviews**: four quotes copied verbatim from the old lwdoorservice.com (Nicole W., Malcolm E., Sunny K., Peg E.), each labelled as a testimonial from the previous site, not verified against a third-party site. Sample reviews removed. The Checkbook comment was rejected (ambiguous tone, truncated).
- **Logo**: `logos/logo.svg` (and `logos/logo-light.svg` for the dark footer), brand blue #224267 + green #69c066, garage-door-over-water mark, Montserrat-style wordmark with system-font fallback (live text, not outlined paths). `favicon.svg` updated. Palette navy changed to #224267.
- Unverified claims removed: BBB Accredited, HomeAdvisor Certified, Licensed/Bonded/Insured. Contact email changed to info@LWDoorService.com (JSON-LD and contact page).

## Outstanding owner facts

- [ ] Confirm the Yelp rating and count on the live page; "Perfect 5-Star" is risky (snippets showed 5.0 and 4.9, 13 to 29 reviews). Safer wording is "5-star rated on Yelp".
- [ ] Get 4 to 6 real Yelp reviews verbatim with dates and permission; match the four old-site names; get Sunny K.'s full text.
- [ ] Confirm the phone (425-301-7543 vs 425-484-5628 seen on one Yelp listing) and the email.
- [ ] Confirm "since 2014" and "20+ years" wording with Danny.
- [ ] License number, hours, street address (`PostalAddress`), exact service-area cities; "lifetime warranties" terms.
- [ ] Decide whether BBB / HomeAdvisor may be shown (no BBB listing found).
- [ ] `og-image.png` (1200x630), referenced in JSON-LD, not created.
- [ ] Host choice; form annotated for Netlify Forms (`data-netlify`).
