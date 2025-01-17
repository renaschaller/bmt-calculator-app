import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-zeiterfassung',
  templateUrl: './zeiterfassung.page.html',
  styleUrls: ['./zeiterfassung.page.scss'],
})
export class ZeiterfassungPage {
  scannedResult: string = ''; // Gescanntes Ergebnis
  faId: string = '';         // Fertigungsauftrags-ID
  arbeitsgangId: string = ''; // Arbeitsgang-ID
  arbeitsgangText: string = ''; // Textbeschreibung des Arbeitsgangs
  scanTimestamp: string = '';

  // Mapping der Arbeitsgang-IDs zu Texten
  arbeitsgangMapping: { [key: string]: string } = {
    'R0447': 'Verpackungsarbeiten',
    'R0433': 'Borsten zuschneiden',
    'R0020': 'Streifenmaschine 4 bmt SV 2,5',
    'R0330': 'Ringe schneiden und richten'
  };

  constructor() {}

  async scanQRCode() {
    try {
      // Starte den QR-Code-Scanner
      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        this.scannedResult = result.content.trim(); // Entferne führende/nachfolgende Leerzeichen

        // Gib den gescannten Text aus (zur Debugging-Zwecken)
        console.log('Gescanntes Ergebnis:', this.scannedResult);

        // Entferne nicht sichtbare Zeichen (z.B. \n oder \t)
        const sanitizedResult = this.scannedResult.replace(/\s+/g, ' '); // Ersetzt mehrere Leerzeichen durch ein einziges

        // Teile den Text basierend auf Leerzeichen
        const parts = sanitizedResult.split(' ');

        if (parts.length >= 2) {
          const faParts = parts[0].split('-'); // FA in 3 Teile teilen
          this.faId = faParts[1] + '-' + faParts[2]; // Setze FA-ID
          this.arbeitsgangId = parts[1]; // Setze Arbeitsgang-ID

          // Finde die Arbeitsgang-Beschreibung
          this.arbeitsgangText = this.arbeitsgangMapping[this.arbeitsgangId] || 'Unbekannt'; // Fallback auf "Unbekannt"

          // Holen des Zeitstempels (Datum und Uhrzeit)
          const currentDate = new Date();
          this.scanTimestamp = currentDate.toLocaleString(); // Gibt den Zeitstempel im lokalen Format zurück
          
        } else {
          alert('Unvollständiger QR-Code');
        }
      } else {
        alert('Kein QR-Code erkannt');
      }
    } catch (error) {
      console.error('Fehler beim Scannen: ', error);
      alert('Fehler beim Scannen des QR-Codes');
    }
  }
}