import { Vehicle } from './vehicle';
import { CarType } from './car-type';

export class Car implements Vehicle {
  brand: string = '';
  engine: number;
  id: string;
  isStarted?: boolean = false;
  name: string;
  type: CarType;
  private fuel: number = 0;

  constructor(car?: Car) {
    // karena optional (?) === undefined
    // harus di cek dahulu
    if (car) {
      this.id = car.id
      this.brand = car.brand
      this.name = car.name
      this.type = car.type
      this.engine = car.engine
    }
  }
  // setter
  setFuel(fuel: number): void {
    this.fuel = fuel;
  }

  startEngine(): void {
    this.isStarted = true
    if (this.fuel > 0) {
      console.log(`Engine car is started..brmmmmmm`);
    } else {
      console.log(`Fuel is empty, please fill the tank..`);
    }
  }

  setName(name: string): void {
    this.name = name
  }

  // getter
  getName(): string {
    return this.name
  }



}
