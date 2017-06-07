import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <ul>
      <li [class]="priceColor(currentKeg)" *ngFor="let currentKeg of childKegList">{{currentKeg.name}} {{currentKeg.type}} by {{currentKeg.brand}},   {{currentKeg.abv}}%, &#36;{{currentKeg.price}}</li>
    </ul>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];

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
