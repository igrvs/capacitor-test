import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "me.igrvs.app",
  appName: "capacitor-test",
  webDir: "out",
  server: {
    cleartext: true,
    // url: "http://127.0.0.1:3000",
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
