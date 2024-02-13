This is a `Next.js` + `Capacitor` + `Konsta` app.

## Getting Started

### Web

1. `next build` will build the app with output files (including `index.html` we need for Capacitor).
2. `next dev` will run it locally (`localhost:3000`).

## Native

1. Change the URL inside `capacitor.config.js` to match your localhost setup (pointing to `localhost:3000`):

```
...
  server: {
    androidScheme: "https",
    url: "http://127.0.0.1:3000",
  },
...
```

2. Build native project using XCode / Android Studio & run it.

## Additional Notes

1. Next.js was chosen since a better option over CRA for Web.
2. In order to have pages transitions it was selected to use shallow routing to avoid full rerender.
3. For better native UX it's better to use Ionic. Chose `Konsta` to experiment & test.
