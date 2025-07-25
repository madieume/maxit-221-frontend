import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TransfertComponent } from './pages/transfert/transfert.component';
import { DemandesAnnulationComponent } from './pages/demandes-annulation/demandes-annulation.component';
import { GestionComptesComponent } from './pages/gestion-comptes/gestion-comptes.component';
import { DepotRetraitComponent } from './pages/depot-retrait/depot-retrait.component';
import { AchatCodeComponent } from './pages/achat-code/achat-code.component';






export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'transfert', component: TransfertComponent },
  { path: 'demandes-annulation', component: DemandesAnnulationComponent },
  { path: 'comptes', component: GestionComptesComponent },
  { path: 'depot-retrait', component: DepotRetraitComponent },
  { path: 'achat-code', component: AchatCodeComponent },


  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
];