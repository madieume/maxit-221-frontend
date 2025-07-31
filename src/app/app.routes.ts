import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TransfertComponent } from './pages/transfert/transfert.component';
import { DemandeAnnulationComponent } from './pages/demandes-annulation/demandes-annulation.component';
import { GestionComptesComponent } from './pages/gestion-comptes/gestion-comptes.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { HistoriqueComponent } from './pages/historique/historique.component';
import { HistoriqueTransfertsComponent } from './pages/historique-transferts/historique-transferts.component';
import { PaiementComponent } from './pages/paiement/paiement.component';
import { DetailCompteComponent } from './pages/details/details.component';
import { AnnulationTransfertComponent } from './pages/annulation-transfert/annulation-transfert.component';
import { NouvelleTransactionComponent } from './pages/nouvelle-transaction/nouvelle-transaction.component';





export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'transfert/:id', component: TransfertComponent },
  { path: 'transfert', component: TransfertComponent },
  { path: 'demandes-annulation', component: DemandeAnnulationComponent },
  { path: 'demandes-annulation', component: DemandeAnnulationComponent },
  { path: 'comptes', component: GestionComptesComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'historique', component: HistoriqueComponent },
  { path: 'historique-transferts', component: HistoriqueTransfertsComponent },  
  { path: 'paiement', component: PaiementComponent },
  { path: 'details/:id', component: DetailCompteComponent }, 
  { path: 'annulation-transfert/:id', component: AnnulationTransfertComponent },
{ path: 'nouvelle-transaction/:id', component: NouvelleTransactionComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
];