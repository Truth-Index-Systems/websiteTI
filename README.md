# Truth Index Systems — Website v1.0

Flagship Next.js homepage for Truth Index Systems.

## Run locally

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

## Notes

- Dependencies are pinned to Next.js 16.2.11 (Active LTS security release) and React 19.2.7.

- MarketRoute links to https://www.marketroute.co.uk
- HandoverAI is presented as an Engineering Solutions example and links to https://www.handoverai.co.uk
- No client names are published on the site.
- Connect the final business contact destination before production launch.
- Brand mark is an inline SVG, so the build has no external image dependency.


## Build 3 — Legibility & Brand Marks

- Increased body-copy contrast and reading size while preserving the existing copy.
- Added dedicated Genesis T8, CIE v1.0 and MarketRoute marks.
- Preserved the MarketRoute animated route visual.
- Removed HandoverAI and all named engineering examples from the public site.
- Engineering Solutions now presents capabilities only until a stronger case-study portfolio exists.


## Final Polish / Freeze Candidate
- Crimson emphasis added only to the key word in each major statement.
- Hero emphasis is **Intelligent**.
- Engineering Solutions heading/subheading spacing refined.
- Existing architecture and MarketRoute animation preserved.


## v1.0 Favicon Integration
- Truth Index Systems favicon assets are included in `/public`.
- Next.js metadata is configured for ICO, SVG, 16px, 32px and Apple touch icons.
- Web app manifest is configured.
- No manual favicon integration is required after deployment.
