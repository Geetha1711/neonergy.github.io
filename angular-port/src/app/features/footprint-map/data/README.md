# India states GeoJSON — bundle this as an asset

This component expects an India-states GeoJSON file at runtime. The build
in this repo is configured to load it from `assets/footprint-map/india-states.geojson`.

## Recommended source

Use the public-domain **geohacker/india** dataset on GitHub. The
`india_telengana.geojson` file there shows **Telangana split out from
Andhra Pradesh** — matching the post-2014 political map.

```bash
mkdir -p src/app/features/footprint-map/data
curl -sSL \
  https://raw.githubusercontent.com/geohacker/india/master/state/india_telengana.geojson \
  -o src/app/features/footprint-map/data/india-states.geojson
```

## Tell Angular about it

In `angular.json`, append to the `assets` array of your build target:

```jsonc
{
  "glob": "**/*",
  "input": "src/app/features/footprint-map/data",
  "output": "/assets/footprint-map"
}
```

That makes the file available at `/assets/footprint-map/india-states.geojson`
(the default the component fetches).

## Alternative: import as JSON

If you'd rather inline it into the bundle (useful if you can't push extra
assets), enable `resolveJsonModule` and `esModuleInterop` in `tsconfig.json`,
rename to `.json`, and pass it as an Input:

```ts
import indiaStates from './data/india-states.json';

// template:
// <app-footprint-map [geoJson]="indiaStates" />
```

Then add a corresponding `@Input() geoJson?: StatesGeo` and skip the HTTP
fetch when it's provided. Roughly:

```ts
ngOnInit() {
  if (this.geoJson) { this.geo.set(this.geoJson); /* ... */ return; }
  this.http.get<StatesGeo>(this.geoJsonUrl).subscribe(...);
}
```

## Schema notes

The component reads the state name from any of these property keys, so most
public Indian-states GeoJSONs work without modification:

- `NAME_1`
- `st_nm`
- `STATE`
- `state`
- `name`
