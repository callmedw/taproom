import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'pint-sold',
  template: `<button class="btn" (click)="sellAPintHasBeenClicked(currentKeg)">Sell a Pint</button>

  [childSelectedKeg]="selectedKeg" (clickSenderPint)="editPint($event)"
  `
})

export class KegListComponent {
  @Input() childSelectedKeg: Keg;
  @Output() clickSenderPint = new EventEmitter();



  sellAPint () {
    childSelectedKeg.volume = childSelectedKeg.volume - 1;
    this.clickSenderPint.emit(childSelectedKeg.volume);

    this.selectedKeg = clickedKeg;
    selectedKeg.volume = selectedKeg.volume - 1;
    this.clickSenderPint.emit(selectedKeg.volume);
  }

}
