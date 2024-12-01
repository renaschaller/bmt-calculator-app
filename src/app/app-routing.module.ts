import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BerechnungPage } from './folder/berechnung/berechnung.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/folder/berechnung',
    pathMatch: 'full',
  },

  {
    path: 'folder/berechnung',
    loadChildren: () => import('./folder/berechnung/berechnung.module').then(m => m.BerechnungPageModule),
  },
{
    path: 'folder/informationen', 
    loadChildren: () => import('./folder/informationen/informationen.module').then(m => m.InformationenPageModule),
  },
  {
    path: 'folder/kontaktdaten', 
    loadChildren: () => import('./folder/kontaktdaten/kontaktdaten.module').then(m => m.KontaktdatenPageModule),
  },

  
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}