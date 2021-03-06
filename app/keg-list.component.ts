import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <marquee *ngFor="let currentKeg of childKegList | kegLevel:filterByKegLevel" bgcolor="#cccccc" loop="-1" scrollamount="2" width="100%">{{currentKeg.name}}</marquee>


    <ul>
      <li [class]="priceColor(currentKeg)" *ngFor="let currentKeg of childKegList"><h3>{{currentKeg.name}}</h3> {{currentKeg.type}} by {{currentKeg.brand}}, {{currentKeg.abv}}%, &#36;{{currentKeg.price}} {{currentKeg.volume}} pints remaining
      <button class="btn" (click)="editButtonHasBeenClicked(currentKeg)">Edit</button> <button class="btn" (click)="sellAPintHasBeenClicked(currentKeg)">Sell a Pint</button></li>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Input() childSelectedPint: Keg;
  @Output() clickSender = new EventEmitter();
  @Output() clickSenderPint = new EventEmitter();
  filterByKegLevel: string = "lowKegs";

  onChange(dropdownOptionSelected) {
    this.filterByKegLevel = dropdownOptionSelected;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  sellAPintHasBeenClicked(pintToEdit: Keg) {
    this.clickSenderPint.emit(pintToEdit);
  }

  priceColor(currentKeg){
    if(currentKeg.price === "7"){
      return "bg-success";
    } else if (currentKeg.price === "6"){
      return "bg-warning";
    } else if (currentKeg.price === "5"){
      return "bg-info";
    } else {
      return "bg-danger";
    }
  }
}
