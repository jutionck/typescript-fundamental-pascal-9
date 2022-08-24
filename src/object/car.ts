import { Vehicle } from './vehicle';
import { CarType } from './car-type';
import { CarFeature, CarSpec } from './car-feature';

export class Car implements CarSpec, CarFeature {
  private fuel: number = 0;
  readonly color: string;
  constructor(private readonly vehicle?: Vehicle) {}
  setFuel(fuel: number): void {
    this.fuel = fuel;
  }
  startEngine(): void {
    if (this.fuel > 0) {
      console.log(`Engine car is started..brmmmmmm`);
    } else {
      console.log(`Fuel is empty, please fill the tank..`);
    }
  }

  engineSpec(cc: number): number {
    return cc;
  }

  engineType(type: string): string {
    return type;
  }

  fuelType(fuel: string): string {
    return fuel;
  }

  safety(feature: string[]): void {
    feature.forEach((item => {
      console.log(item);
    }))
  }

  speed(km: number): string {
    if (km > 500)
      return 'Sport mode';
    return 'City mode'
  }
}
