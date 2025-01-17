import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bündelschnittlänge', url: '/folder/berechnung', icon: 'calculator' },
    { title: 'Toleranzberechnung', url: '/folder/toleranzen', icon: 'checkbox-outline' },
    { title: 'Zeiterfassung', url: '/folder/zeiterfassung', icon: 'stopwatch-outline' },
    { title: 'Informationen', url: '/folder/informationen', icon: 'information-circle' },
  ];
}


