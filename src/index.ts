import { Hero } from './model/hero';

const daud: Hero = new Hero('Daud', 100, 100, 10);
const fahlan: Hero = new Hero('Fahlan', 100, 100, 20);

daud.attack(fahlan);
console.log('Fahlan:', fahlan);
console.log('Daud', daud);
