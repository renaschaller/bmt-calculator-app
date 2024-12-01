import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Berechnung', url: '/folder/berechnung', icon: 'calculator' },
    { title: 'Informationen', url: '/folder/informationen', icon: 'information-circle' },
    //{ title: 'Kontaktdaten', url: '/folder/kontaktdaten', icon: 'person' },
  ];
}


