import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h2>New Keg</h2>
    <div class="form-group">
      <label>Name:</label>
      <input #newName>
    </div>
    <div class="form-group">
      <label>Brand:</label>
      <input #newBrand>
    </div>
    <div class="form-group">
      <label>Type:</label>
      <input #newType>
    </div>
    <div class="form-group">
      <label>ABV:</label>
      <input #newAbv>
    </div>
    <div class="container">
      <label>Pint Price:</label>
      <select #newPrice>
        <option [value]=""> </option>
        <option [value]=2> $2 </option>
        <option [value]=5> $5 </option>
        <option [value]=6> $6 </option>
        <option [value]=7> $7 </option>
      </select>
    </div>
    <button class="btn" (click)="submitForm(newName.value, newBrand.value, newType.value, newAbv.value, newPrice.value); newName.value=''; newBrand.value=''; newType.value=''; newAbv.value='';">Add Keg</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, type: string, abv: number, price: number) {
    var newKegToAdd: Keg = new Keg(name, brand, type, abv, price);
    this.newKegSender.emit(newKegToAdd);
  }
}
