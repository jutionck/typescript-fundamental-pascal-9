export class Hero {
  private name: string;
  private hp: number;
  private mana: number;
  private baseDamage: number;


  constructor(name: string, hp: number, mana: number, baseDamage: number) {
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.baseDamage = baseDamage;
  }

  receiveDamage(hero: Hero): void {
    this.hp -= hero.getBaseDamage();
  }

  attack(hero: Hero): void {
    hero.receiveDamage(this)
  }

  heal(hero: Hero): void {
    hero.hp += this.mana/2;
    this.mana -= this.mana/2;
  }

  getBaseDamage(): number {
    return this.baseDamage
  }

  getName(): string {
   return this.name;
  }

  getHp(): number {
    return this.hp;
  }

  getMana(): number {
    return this.mana
  }

  toString(): string {
    return "Hero { " +
        "name= " + this.name +
        ", hp= " + this.hp +
        ", mana= " + this.mana +
        ", baseDamage= " + this.baseDamage +
        " }";
  }
}
