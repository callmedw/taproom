import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h2>New Keg</h2>
      <div class="form-group">
        <label>Name:</label>
        <input class="form-control" #newName>
      </div>
      <div class="form-group">
        <label>Brand:</label>
        <input class="form-control" #newBrand>
      </div>
      <div class="form-group">
        <label>Type:</label>
        <input class="form-control" #newType>
      </div>
      <div class="form-group">
        <label>ABV:</label>
        <input class="form-control" #newAbv>
      </div>
      <div class="form-group">
        <label>Pint Price:</label>
        <select class="form-control" #newPrice>
          <option [value]=""> </option>
          <option [value]=2> $2 </option>
          <option [value]=5> $5 </option>
          <option [value]=6> $6 </option>
          <option [value]=7> $7 </option>
        </select>
        <button class="btn" (click)="submitForm(newName.value, newBrand.value, newType.value, newAbv.value, newPrice.value); newName.value=''; newBrand.value=''; newType.value=''; newAbv.value='';">Add Keg</button>

    </div>
    <hr>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, type: string, abv: number, price: number) {
    var newKegToAdd: Keg = new Keg(name, brand, type, abv, price);
    this.newKegSender.emit(newKegToAdd);
  }
}
