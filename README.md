# garage-door-design-1

Marketing site for **Lake Washington Garage Door Service** (lwdoorservice.com), rebuilt from the June 2026 scaffold.

Plain HTML + CSS + ~20 lines of JS. No framework, no build step: serve the folder with any static host (icons load from `icons.svg`, which browsers block on `file://`, so open it over http).

```
python3 -m http.server 8000   # then http://localhost:8000
```

## What changed from the scaffold

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page, skip link, `aria-current`, visible focus, labelled forms with `autocomplete`/`inputmode`.
- Emoji icons replaced by an SVG sprite (`icons.svg`); fixes inconsistent rendering and screen-reader noise.
- Mobile menu is a real `<button aria-expanded>`; the nav works with JS off.
- Per-page `<title>`, meta description, canonical, Open Graph; `LocalBusiness` JSON-LD with `areaServed`; `sitemap.xml`, `robots.txt`; `thank-you` and `404` are `noindex`.
- Colour contrast raised to WCAG AA; `prefers-reduced-motion` respected; fluid type; print stylesheet.
- Placeholder "TODO" text is removed from the public pages. The three **sample reviews are kept** (labelled "Sample review") for the content-and-design stage; this is temporary internal review hosting, not the live domain. Replace them with real reviews before launch.

## Open items before launch

Facts only the owner can supply; nothing is published for them.

- [ ] Real street address / `PostalAddress` in the JSON-LD (helps local search)
- [ ] Contractor license number (footer says "Licensed · Bonded · Insured")
- [ ] Confirm business hours and the exact service-area city list
- [ ] Replace the three sample reviews with real customer reviews (Google/Yelp); add `aggregateRating` only with real data
- [ ] `og-image.png` (1200×630) — referenced in the JSON-LD, not yet created
- [ ] Confirm the claims copied from the scaffold: 20+ years, BBB Accredited, HomeAdvisor Certified, 5-star Yelp, lifetime warranties
- [ ] Pick a host. The form is annotated for Netlify Forms (`data-netlify`); on other hosts swap `action` for Formspree or similar
