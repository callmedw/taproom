export class Keg {
  public empty: boolean = false;
  constructor(public name: string, public brand: string, public type: string, public price: number, public abv: number) {}
}
