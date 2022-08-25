import { Hero } from './model/hero';

const daud: Hero = new Hero('Daud', 100, 100, 10);
const fahlan: Hero = new Hero('Fahlan', 100, 100, 20);
const riza: Hero = new Hero('Riza', 100, 100, 10);
const aisyah: Hero = new Hero('Aisyah', 100, 100, 10);
const rasyid: Hero = new Hero('Rasyid', 100, 100, 40);

console.log(fahlan.getName(), 'current hp :', fahlan.getHp());
console.log(daud.getName(), 'attack', fahlan.getName());
daud.attack(fahlan);
console.log(fahlan.getName(), 'current hp :', fahlan.getHp());

console.log(riza.getName(), 'current mana :', riza.getMana());
console.log(riza.getName(), 'heal', fahlan.getName());
riza.heal(fahlan);
console.log(riza.getName(), 'current mana :', riza.getMana());
console.log(fahlan.getName(), 'current hp :', fahlan.getHp());
console.log(riza.getName(), 'current hp :', riza.getHp());


