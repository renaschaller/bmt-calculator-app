import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  password: string = '';

  constructor(private navController: NavController) {}

  submitPassword() {
    if (this.password === 'bmt') { 
      this.navController.navigateRoot('/folder/berechnung'); 
    } else {
      alert('Falsches Passwort');
    }
  }
}
