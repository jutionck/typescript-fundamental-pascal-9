import { Car } from './object/car';
import { CarType } from './object/car-type';

const sedan: Car = new Car()
sedan.id = '1';
sedan.name = 'Civic';
sedan.brand = 'Honda';
sedan.engine = 2;
sedan.type = CarType.SEDAN;
// sedan.fuel= 100; // GAK BOLEH
sedan.setFuel(100);
sedan.startEngine()
