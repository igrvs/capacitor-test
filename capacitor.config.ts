import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "me.igrvs.app",
  appName: "capacitor-test",
  webDir: "out",
  server: {
    cleartext: true,
    // url: "http://10.42.8.143:3000",
  },
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
