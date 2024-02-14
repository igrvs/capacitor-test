This is a `Next.js` + `Capacitor` + `Konsta` app.

## Getting Started

### Web

1. `npx next build` will build the app with output files (including `index.html` we need for Capacitor).
2. `npx serve@latest out` will run build locally. You will get a message:

```
 Serving!
   - Local: http://localhost:3000
   - Network:  http://10.42.8.143:3000 <- copy this URL
```

### Native

1. Paste your local running URL to `capacity.config.js`:

```
...
 server: {
    cleartext: true,
    url: "http://10.42.8.143:3000", <- put your URL here
  },
...
```

2. You can sync your web application build to your native project by running the following commands:

```
npx cap sync
npx cap copy
```

2. Build native project using XCode / Android Studio & run it.

## Additional Notes

1. Next.js was chosen since a better option over CRA for Web.
2. In order to have pages transitions it was selected to use shallow routing to avoid full rerender.
3. For better native UX it's better to use Ionic. Chose `Konsta` to experiment & test.
