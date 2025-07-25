import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TransfertComponent } from './pages/transfert/transfert.component';
import { DemandeAnnulationComponent } from './pages/demandes-annulation/demandes-annulation.component';
import { GestionComptesComponent } from './pages/gestion-comptes/gestion-comptes.component';
//import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HistoriqueComponent } from './pages/historique/historique.component';
import { SousComptesComponent } from './pages/sous-comptes/sous-comptes.component';
import { HistoriqueTransfertsComponent } from './pages/historique-transferts/historique-transferts.component';
import { PaiementComponent } from './pages/paiement/paiement.component';











export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'transfert', component: TransfertComponent },
  { path: 'demandes-annulation', component: DemandeAnnulationComponent },
  { path: 'comptes', component: GestionComptesComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'sous-comptes', component: SousComptesComponent },
  { path: 'historique-transferts', component: HistoriqueTransfertsComponent },  
  { path: 'paiement', component: PaiementComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
