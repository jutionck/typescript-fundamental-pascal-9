export class Hero {
  private name: string;
  private hp: number;
  private mana: number;
  private baseDamage: number;

  constructor(
      name: string,
      hp: number,
      mana: number,
      baseDamage: number
  ) {
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.baseDamage = baseDamage;
  }

  getHit(damage: number): void {
    this.hp -= damage;
  }

  receiveDamage(damage: number): void {
    this.hp -= damage;
  }

  attack(hero: Hero): void {
    hero.receiveDamage(this.baseDamage)
  }
}
