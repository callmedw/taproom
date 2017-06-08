import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 id="header">Tap Room</h1>
      <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
      <new-keg (newKegSender)="addKeg($event)"></new-keg>
      <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditing()"></edit-keg>
    </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('health problem', 'Your Mom brewing', 'barley wine', 13, 6),
    new Keg('piss water', 'Your Dad brewing', 'lager', 4, 5)
  ];

  selectedKeg: Keg = null;

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild)
  }
}
