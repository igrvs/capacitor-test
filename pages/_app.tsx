import "@/styles/globals.css";
import { App } from "konsta/react";
import type { AppProps } from "next/app";
import { Capacitor } from "@capacitor/core";

const isAndroid = Capacitor.getPlatform() === "android";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App theme={isAndroid ? "material" : "ios"}>
      <Component {...pageProps} />
    </App>
  );
}
