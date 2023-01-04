export {};

declare global {
  interface Window {
    ReactQueryClientContext: Context<QueryClient | undefined>;
    AmbientLightSensor: AmbientLightSensor;
    Accelerometer: Accelerometer;
  }
}
