# Neonergy Footprint Map — Angular 17 component

Drop-in Angular 17 standalone component that recreates the **South India footprint map** scene from the hero intro animation:

- Flat India map → smooth zoom to South India
- 10 project markers fade in sequentially with capacity labels
- Headline + animated counter stats
- Brand-aligned (blue / green / amber palette, Manrope type)
- Pure SVG, no canvas, no WebGL — works on every browser

## Tech assumed

| | |
|---|---|
| Angular | 17.3 standalone components, `@for` / `@if` control flow |
| TypeScript | 5.4 |
| Styling | SCSS, CSS custom properties from your design tokens |
| Reactivity | RxJS 7 (`animationFrameScheduler` for the timeline) |
| Geometry | `d3-geo` (Mercator projection) |

## Install

```bash
npm i d3-geo
npm i -D @types/d3-geo
```

That's the only dependency. No d3 bundle required — we only use `geoMercator`.

## Files

Copy `src/app/features/footprint-map/` into your repo. Then add the route or drop the component anywhere:

```html
<!-- e.g. about-us.component.html -->
<app-footprint-map />
```

```ts
// any standalone parent
import { FootprintMapComponent } from './features/footprint-map/footprint-map.component';

@Component({
  standalone: true,
  imports: [FootprintMapComponent],
  template: `<app-footprint-map />`,
})
export class AboutUsComponent {}
```

## Customising

- **Project list** — edit `footprint-map.data.ts`. Each entry has `lat`, `lng`, `capacity`, `type`, plus a stable `id` and an optional `phase`.
- **Marker timing** — `MARKERS_START` and `MARKER_SPACING` constants in the component.
- **Camera bounds** — `INDIA_BBOX` and `SOUTH_BBOX` in `footprint-map.geo.ts`.
- **Type styles** — `TYPE_STYLES` in `footprint-map.data.ts` maps each project type to a brand colour.
- **Trigger on scroll** — set `[autoplay]="false"` and call `play()` from an IntersectionObserver.

## Geo data

`data/india-states.geojson` is the India state boundaries (Subhash9325 / GeoJson-Data-of-Indian-States, public domain). Bundle it as an asset in `angular.json`:

```jsonc
"assets": [
  // ...
  {
    "glob": "**/*",
    "input": "src/app/features/footprint-map/data",
    "output": "/assets/footprint-map"
  }
]
```

Or import it as JSON if you prefer (`resolveJsonModule: true` in `tsconfig`).

## A11y

- Non-decorative, so it ships with `role="img"` and an `aria-label` describing the portfolio.
- Respects `prefers-reduced-motion`: skips intro and renders the final state immediately.

## Inputs

| Input | Type | Default | Notes |
|---|---|---|---|
| `autoplay` | `boolean` | `true` | Set false to gate on scroll/click |
| `duration` | `number` | `15` | Seconds, scene 3 → final |
| `loop` | `boolean` | `false` | Final state holds when false |
| `headline` | `string` | `'Ten projects.\nOne renewable backbone.'` | `\n` for line break |
