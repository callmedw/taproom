export class Keg {
  public empty: boolean = false;
  constructor(public name: string, public brand: string, public type: string, public abv: number, public price: number) {}
}
