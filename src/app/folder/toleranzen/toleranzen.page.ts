import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toleranzen',
  templateUrl: './toleranzen.page.html',
  styleUrls: ['./toleranzen.page.scss'],
})
export class ToleranzenPage {
    // Dropdown-Optionen
    public brushTypes = [
      { value: 'option1', label: 'Gerade' },
      { value: 'option2', label: 'Ring/Spirale/Topf' },
    ];
    // Variablen
    public selectedOption: string | null = null; // Dropdown-Auswahl
    public buerstenlaenge: number | null = null; // Bürstenlänge
    public innendurchmesser: number | null = null; // Innendurchmesser für Option2
    public aussendurchmesser: number | null = null; // Außendurchmesser für Option2
    public berechnungErgebnis: number | null = null; // Berechnetes Ergebnis
    public selectedType: string | null = null;
    public tolerancesCalculated: boolean = false;
    public widthTolerance: string = '';
    public heightTolerance: string = '';
    public lengthTolerance: string = '';
    public innerTolerance: string = '';
    public outerTolerance: string = '';


    // Winkeloptionen
    public typeOptions = [
      { type: 'Streifen Typ 2', widthTolerance: '± 0,15 mm', heightTolerance: '± 0,30 mm' },
      { type: 'Streifen Typ 2,5', widthTolerance: '± 0,25 mm', heightTolerance: '± 0,50 mm' },
      { type: 'Streifen Typ 3', widthTolerance: '± 0,25 mm', heightTolerance: '± 0,50 mm' },
      { type: 'Streifen Typ 4', widthTolerance: '± 0,30 mm', heightTolerance: '± 0,50 mm' },
      { type: 'Streifen Typ 5', widthTolerance: '± 0,30 mm', heightTolerance: '± 0,50 mm' },
      { type: 'Streifen Typ 6', widthTolerance: '± 0,40 mm', heightTolerance: '± 0,70 mm' },
      { type: 'Streifen Typ 7', widthTolerance: '± 0,50 mm', heightTolerance: '± 0,80 mm' },
      { type: 'Streifen Typ 8', widthTolerance: '± 0,50 mm', heightTolerance: '± 1,00 mm' },
      { type: 'Streifen Typ 10', widthTolerance: '± 0,80 mm', heightTolerance: '± 1,50 mm' },
      { type: 'Streifen Typ 12', widthTolerance: '± 0,80 mm', heightTolerance: '± 2,00 mm' },
    ];
    

  constructor() { }

getWidthTolerance(type: string): string {
  const option = this.typeOptions.find(opt => opt.type === type);
  return option ? option.widthTolerance : 'Keine Angabe';
}

getHeightTolerance(type: string): string {
  const option = this.typeOptions.find(opt => opt.type === type);
  return option ? option.heightTolerance : 'Keine Angabe';
}

getLengthTolerance(length: number | null): string {
  if (length === null) {
    return 'Keine Länge angegeben';
  }
  if (length > 30 && length <= 120) {
    return '± 0,80 mm';
  } else if (length > 120 && length <= 400) {
    return '± 1,20 mm';
  } else if (length > 400 && length <= 1000) {
    return '± 2,00 mm';
  } else if (length > 1000 && length <= 2000) {
    return '± 3,00 mm';
  } else if (length > 2000 && length <= 4000) {
    return '± 4,00 mm';
  }
  return 'Keine Toleranz';
}

getOuterTolerance(diameter: number): string {
  if (diameter <= 40) return '± 0,20 mm';
  if (diameter <= 50) return '± 0,40 mm';
  if (diameter <= 75) return '± 0,60 mm';
  if (diameter <= 150) return '± 0,80 mm';
  if (diameter <= 200) return '± 1,00 mm';
  if (diameter <= 300) return '± 1,50 mm';
  if (diameter <= 500) return '± 2,00 mm';
  return '± 5,00 mm'; // Für Durchmesser über 500 mm
}

getInnerTolerance(outerTolerance: string): string {
  // Extrahiere den numerischen Wert aus der Außentoleranz (z. B. "± 0,20 mm" → 0,20)
  const numericValue = parseFloat(outerTolerance.replace(/[^0-9,.]/g, '').replace(',', '.'));
  const innerTolerance = (numericValue * 2).toFixed(2).replace('.', ','); // Verdopple den Wert und formatiere ihn
  return `± ${innerTolerance} mm`;
}

calculateTolerances(): void {
  if (this.selectedType && this.buerstenlaenge !== null) {
    // Breiten- und Höhentoleranz aus den Typ-Daten holen
    const selectedOption = this.typeOptions.find(opt => opt.type === this.selectedType);
    this.widthTolerance = selectedOption ? selectedOption.widthTolerance : 'Keine Angabe';
    this.heightTolerance = selectedOption ? selectedOption.heightTolerance : 'Keine Angabe';

    // Körperlängentoleranz berechnen
    this.lengthTolerance = this.getLengthTolerance(this.buerstenlaenge);

    // Markiere, dass die Toleranzen berechnet wurden
    this.tolerancesCalculated = true;
  } else if (this.selectedOption === 'option2' && this.aussendurchmesser !== null) {
    const selectedOption = this.typeOptions.find(opt => opt.type === this.selectedType);
    this.widthTolerance = selectedOption ? selectedOption.widthTolerance : 'Keine Angabe';
    this.heightTolerance = selectedOption ? selectedOption.heightTolerance : 'Keine Angabe';
    // Außentoleranz berechnen
    this.outerTolerance = this.getOuterTolerance(this.aussendurchmesser);

    // Innentoleranz berechnen (Außentoleranz × 2)
    this.innerTolerance = this.getInnerTolerance(this.outerTolerance);

    // Markiere, dass die Toleranzen berechnet wurden
    this.tolerancesCalculated = true;
  }
}

onOptionChange(): void {
  this.selectedType = null;
  this.buerstenlaenge = null;
  this.tolerancesCalculated = false;
  this.widthTolerance = '';
  this.heightTolerance = '';
  this.lengthTolerance = '';
  this.innerTolerance = '';
  this.outerTolerance = '';
}

resetAllInputs(): void {
  this.selectedOption = null;
  this.selectedType = null;
  this.buerstenlaenge = null;
  this.tolerancesCalculated = false;
  this.widthTolerance = '';
  this.heightTolerance = '';
  this.lengthTolerance = '';
  this.innerTolerance = '';
  this.outerTolerance = '';
}
isBerechnenButtonEnabled(): boolean {
  if (this.selectedOption === 'option1') {
    return this.buerstenlaenge !== null && this.buerstenlaenge > 0;
  } else if (this.selectedOption === 'option2') {
    return (
      this.aussendurchmesser !== null &&
      this.aussendurchmesser > 0
    );
  }
  return false;
}


}
