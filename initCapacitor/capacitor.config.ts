import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cap.test',
  appName: 'CapTest',
  webDir: undefined,
  bundledWebRuntime: false,
  server: {
    url: 'http://<angularMachineIP>:4200',
    cleartext: true,
  },
};

export default config;
