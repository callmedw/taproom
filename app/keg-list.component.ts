import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <ul>
      <li [class]="priceColor(currentKeg)" *ngFor="let currentKeg of childKegList">{{currentKeg.name}} {{currentKeg.type}} by {{currentKeg.brand}},   {{currentKeg.abv}}%, &#36;{{currentKeg.price}}
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button></li>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  priceColor(currentKeg){
    if(currentKeg.price === 7){
      return "bg-success";
    } else if (currentKeg.price === 6){
      return "bg-warning";
    } else if (currentKeg.price === 5){
      return "bg-info";
    } else {
      return "bg-danger";
    }
  }
}
