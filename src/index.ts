import { Car } from './object/car';
import { CarType } from './object/car-type';
import { Vehicle } from './object/vehicle';

const civic: Vehicle = {
  id: '1',
  name: 'Civic',
  brand: 'Honda',
  type: CarType.SEDAN,
  engine: 2,
}
const sedan: Car = new Car(civic);
function printCar(): void {
  const safety: string[] = ['Air Bag', 'Camera', 'Auto Pilot'];
  const speed = sedan.speed(100);
  const engineType = sedan.engineType('Matic');
  const fuelType = sedan.fuelType('Gasoline');
  const engineSpec = sedan.engineSpec(4000);
  sedan.safety(safety);
  console.log(sedan);
  console.log(speed, '\n', engineType, '\n', fuelType, '\n', engineSpec);
}
printCar();
