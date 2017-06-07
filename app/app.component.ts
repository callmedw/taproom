import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Tap Room</h1>
      <keg-list [childKegList]="masterKegList"></keg-list>
      <new-keg (newKegSender)="addKeg($event)"> </new-keg>
    </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('health problem', 'Your Mom brewing', 'barley wine', 13, 7),
    new Keg('piss water', 'Your Dad brewing', 'lager', 4, 2)
  ];

  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild)
  }
}
