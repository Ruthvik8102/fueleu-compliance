export interface Route {
  id: string;             // DB UUID
  routeId: string;        // business route code (e.g., R001)
  vesselType: string;     // Container, Tanker, etc.
  fuelType: string;       // HFO, LNG, MGO...
  year: number;
  ghgIntensity: number;   // gCO2e/MJ
  fuelConsumption: number; // tonnes
  distance: number;       // km
  totalEmissions: number; // tonnes CO2e
  isBaseline?: boolean;
}
