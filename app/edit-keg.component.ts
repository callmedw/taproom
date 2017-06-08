import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `

  <div *ngIf="childSelectedKeg">
    <h3>Edit {{childSelectedKeg.name}}</h3>
    <div class="form-group">
      <label>Name:</label>
      <input class="form-control" [(ngModel)]="childSelectedKeg.name">
    </div>
    <div class="form-group">
      <label>Brand:</label>
      <input class="form-control" [(ngModel)]="childSelectedKeg.brand">
    </div>
    <div class="form-group">
      <label>Type:</label>
      <input class="form-control" [(ngModel)]="childSelectedKeg.type">
    </div>
    <div class="form-group">
      <label>ABV:</label>
      <input class="form-control" [(ngModel)]="childSelectedKeg.abv">
    </div>
    <div class="form-group">
      <label>Pint Price:</label>
      <select class="form-control" [(ngModel)]="childSelectedKeg.price">
        <option [value]=""> </option>
        <option [value]=2> $2 </option>
        <option [value]=5> $5 </option>
        <option [value]=6> $6 </option>
        <option [value]=7> $7 </option>
      </select>
      <button class="btn" (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked () {
    this.doneButtonClickedSender.emit();
  }
}
