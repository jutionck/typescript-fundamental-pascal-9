export interface CarFeature {
  safety(feature: string[]): void;
  speed(km: number): string;
}

export interface CarSpec {
  engineSpec(cc: number): number;
  engineType(type: string): string;
  fuelType(fuel: string): string;
}
