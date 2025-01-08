import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-berechnung',
  templateUrl: './berechnung.page.html',
  styleUrls: ['./berechnung.page.scss'],
})
export class BerechnungPage {
  // Dropdown-Optionen
  public brushTypes = [
    { value: 'option1', label: 'Gerade/Topfbürste' },
    { value: 'option2', label: 'Ring/Spirale' },
    { value: 'option3', label: 'Gerade mit Schenkel' },
    { value: 'option4', label: 'Alu Halteprofil' },
  ];
  // Variablen
  public selectedOption: string | null = null; // Dropdown-Auswahl
  public buerstenlaenge: number | null = null; // Bürstenlänge für Option1
  public innendurchmesser: number | null = null; // Innendurchmesser für Option2
  public aussendurchmesser: number | null = null; // Außendurchmesser für Option2
  public berechnungErgebnis: number | null = null; // Berechnetes Ergebnis
  public selectedStreifenart: any = null;
  public selectedAluProfil: any = null;
  public gesamthoehe: number | null = null;
  public selectedAngle: string | null = null;
  public diameterError: boolean = false; // Variable zur Fehlermeldung

  private abverschnittlaenge = 10; // Abverschnittlänge

    // Winkeloptionen
    public angleOptions = [
      { value: 'straight', label: 'Gerade' },
      { value: 'ninety', label: '90 Grad' },
    ];
// Tabelle für Streifenarten
public streifenarten = [
  { name: 'SSV6x17', schenkelhoehe: 17, koerperhoehe: 6 },
  { name: 'SSV6x25', schenkelhoehe: 25, koerperhoehe: 6 },
  { name: 'SSV6x30', schenkelhoehe: 30, koerperhoehe: 6 },
  { name: 'SSV6x40', schenkelhoehe: 40, koerperhoehe: 6 },
  { name: 'SSV10x30', schenkelhoehe: 30, koerperhoehe: 10 },
  { name: 'SSV10x40', schenkelhoehe: 40, koerperhoehe: 10 },
  { name: 'SSV10x50', schenkelhoehe: 50, koerperhoehe: 10 },
];
public aluHalteprofileGerade = [
  { name: 'AH 2,5/13', abzugHalteprofil: 13.5, zusatzBesatzhoehe: 3 },
  { name: 'AH 4/15', abzugHalteprofil: 15, zusatzBesatzhoehe: 5 },
  { name: 'AH 5/17', abzugHalteprofil: 17.5, zusatzBesatzhoehe: 7 },
  { name: 'AH 5/21', abzugHalteprofil: 21, zusatzBesatzhoehe: 7 },
  { name: 'AH 5/25', abzugHalteprofil: 25, zusatzBesatzhoehe: 7 },
  { name: 'AH 5/40', abzugHalteprofil: 40, zusatzBesatzhoehe: 7 },
  { name: 'AH 7/30', abzugHalteprofil: 30, zusatzBesatzhoehe: 10 },
  { name: 'AH 8/40', abzugHalteprofil: 40, zusatzBesatzhoehe: 12 },
  { name: 'AH 8/50', abzugHalteprofil: 50, zusatzBesatzhoehe: 12 },
  { name: 'AH 12/70', abzugHalteprofil: 68, zusatzBesatzhoehe: 15 },
];

public aluHalteprofile90 = [
  { name: 'AF 4/16', abzugHalteprofil: 7.5, zusatzBesatzhoehe: 1.3 },
  { name: 'AF 5/18', abzugHalteprofil: 8.5, zusatzBesatzhoehe: 1.5 },
  { name: 'AF 5/25', abzugHalteprofil: 8.5, zusatzBesatzhoehe: 1.5 },
  { name: 'AF 8/40', abzugHalteprofil: 13.3, zusatzBesatzhoehe: 1.8 },
];

 // Dynamische Liste der verfügbaren Halteprofile
 public availableAluProfiles: any[] = [];

constructor(private alertController: AlertController) {}

// Methode zur Aktualisierung der verfügbaren Alu-Profile basierend auf dem Winkel
  updateAvailableAluProfiles(): void {
    if (this.selectedAngle === 'straight') {
      this.availableAluProfiles = this.aluHalteprofileGerade;
    } else if (this.selectedAngle === 'ninety') {
      this.availableAluProfiles = this.aluHalteprofile90;
    } else {
      this.availableAluProfiles = [];
    }
    this.selectedAluProfil = null; // Setze die Auswahl zurück
  }

   // Methode zur Aktivierung des Berechnen-Buttons
  isBerechnenButtonEnabled(): boolean {
    if (this.selectedOption === 'option1') {
      return this.buerstenlaenge !== null && this.buerstenlaenge > 0;
    } else if (this.selectedOption === 'option2') {
      return (
        this.innendurchmesser !== null &&
        this.aussendurchmesser !== null
      );
    } else if (this.selectedOption === 'option3') {
      return (
        this.selectedAngle !== null &&
        this.selectedStreifenart !== null &&
        this.gesamthoehe !== null &&
        this.gesamthoehe > 0
      );
    } else if (this.selectedOption === 'option4') {
      return (
        this.selectedAngle !== null &&
        this.selectedAluProfil !== null &&
        this.gesamthoehe !== null &&
        this.gesamthoehe > 0
      );
    }
    return false;
  }

  validateDiameters(): void {
    if (this.innendurchmesser !== null && this.aussendurchmesser !== null) {
      if (this.innendurchmesser > this.aussendurchmesser) {
        this.diameterError = true; // Fehler gesetzt
        this.showDiameterErrorAlert(); // Zeige das Popup-Fenster an
      } else {
        this.diameterError = false; // Kein Fehler
      }
    }
  }
    // Methode zum Zurücksetzen nur der Durchmesser-Eingabefelder
    resetDiameters(): void {
      this.innendurchmesser = null;
      this.aussendurchmesser = null;
    }
  
async showDiameterErrorAlert() {
  const alert = await this.alertController.create({
    header: 'Fehlerhafte Eingabe',
    message: 'Bitte überprüfen Sie Ihre Eingaben. Der Innendurchmesser darf nicht größer als der Außendurchmesser sein.',
    buttons: [
      {
        text: 'Werte zurücksetzen',
        handler: () => {
          this.resetDiameters();
        }
      }
    ]
  });

  await alert.present();
}


  // Berechnungsmethode
  berechnen(): void {
    // Überprüfen, ob ein Fehler vorliegt
    if (this.selectedOption === 'option2') {
      this.validateDiameters();
    }

    if (this.diameterError) {
      this.berechnungErgebnis = null;
      return;
    }

    if (this.selectedOption === 'option1') {
      this.berechnungErgebnis = this.calculateBundleLength(this.buerstenlaenge);
    } else if (this.selectedOption === 'option2') {
      const gesamthoehe = this.calculateGesamthoehe();
      this.berechnungErgebnis = this.calculateBundleLength(gesamthoehe);
  
    } else if (this.selectedOption === 'option3' && this.selectedStreifenart && this.gesamthoehe !== null) {
      let { schenkelhoehe, koerperhoehe } = this.selectedStreifenart;
      let faserhoehe = this.gesamthoehe - schenkelhoehe + koerperhoehe;

      if (this.selectedAngle === 'ninety') {
        schenkelhoehe = 0;
        faserhoehe = this.gesamthoehe;
      }
      //Ausnahmefälle Mindestfaserzuschnitt:
        if (koerperhoehe === 6 && faserhoehe < 70){
          faserhoehe = 70
        }
        if (koerperhoehe === 10 && faserhoehe < 80){
          faserhoehe = 80
        }
      this.berechnungErgebnis = this.calculateBundleLength(faserhoehe);
    } else if (this.selectedOption === 'option4' && this.selectedAluProfil && this.gesamthoehe !== null) {
      const { abzugHalteprofil, zusatzBesatzhoehe } = this.selectedAluProfil;
      const faserdurchmesser = this.gesamthoehe - abzugHalteprofil + zusatzBesatzhoehe;
      this.berechnungErgebnis = this.calculateBundleLength(faserdurchmesser);
    } else {
      console.error('Fehlende Eingaben für die Berechnung');
      this.berechnungErgebnis = null;
    }
  }


  // Berechnungslogik für Bündelschnittlänge
  calculateBundleLength(c35: number | null): number {
    if (c35 === null || c35 === 0) {
      return 0;
    } else if (c35 < 20) {
      return 50;
    } else {
      return Math.ceil(c35 * 2 + this.abverschnittlaenge);
    }
  }


  // Berechnung der Gesamthöhe für Ring/Spirale
  calculateGesamthoehe(): number {
    if (this.aussendurchmesser !== null && this.innendurchmesser !== null) {
      return (this.aussendurchmesser - this.innendurchmesser) / 2;
    }
    return 0;
  }

   // Aktualisiert Schenkel- und Körperhöhe basierend auf der Streifenart
   updateHoehen(): void {
    if (this.selectedStreifenart) {
      const { schenkelhoehe, koerperhoehe } = this.selectedStreifenart;
      console.log(`Schenkelhöhe: ${schenkelhoehe}, Körperhöhe: ${koerperhoehe}`);
    }
  }

  // Aktualisiert Werte für Abzug Halteprofil und Zusätzliche Besatzhöhe
  updateAluValues(): void {
    if (this.selectedAluProfil) {
      const { abzugHalteprofil, zusatzBesatzhoehe } = this.selectedAluProfil;
      console.log(`Abzug Halteprofil: ${abzugHalteprofil}, Zus. Besatzhöhe: ${zusatzBesatzhoehe}`);
    }
  }

 // Wird aufgerufen, wenn die Bürstenart geändert wird
 onOptionChange(): void {
  // Zurücksetzen aller Eingabefelder und des Ergebnisses
  this.buerstenlaenge = null;
  this.innendurchmesser = null;
  this.aussendurchmesser = null;
  this.gesamthoehe = null;
  this.selectedStreifenart = null;
  this.selectedAluProfil = null;
  this.berechnungErgebnis = null;
  this.selectedAngle = null;
}
resetAllInputs(): void {
  // Zurücksetzen aller Variablen auf Standardwerte
  this.selectedOption = null;
  this.buerstenlaenge = null;
  this.innendurchmesser = null;
  this.aussendurchmesser = null;
  this.gesamthoehe = null;
  this.selectedStreifenart = null;
  this.selectedAluProfil = null;
  this.berechnungErgebnis = null;
  this.selectedAngle = null;

}
  
}



