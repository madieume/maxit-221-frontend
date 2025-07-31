import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
transactions = [
  { date: '23/07/2025', type: 'Dépôt', montant: '+50 000 FCFA', description: 'Versement mobile money' },
  { date: '22/07/2025', type: 'Retrait', montant: '-10 000 FCFA', description: 'Retrait au DAB' },
  { date: '21/07/2025', type: 'Paiement', montant: '-5 000 FCFA', description: 'Facture d’électricité' },
  { date: '20/07/2025', type: 'Dépôt', montant: '+30 000 FCFA', description: 'Virement bancaire' },
  { date: '19/07/2025', type: 'Achat', montant: '-2 500 FCFA', description: 'Courses au marché' },
  { date: '18/07/2025', type: 'Dépôt', montant: '+15 000 FCFA', description: 'Rechargement Orange Money' },
  { date: '17/07/2025', type: 'Retrait', montant: '-7 000 FCFA', description: 'Retrait caisse' },
  { date: '16/07/2025', type: 'Paiement', montant: '-12 000 FCFA', description: 'Achat de forfait Internet' },
  { date: '15/07/2025', type: 'Dépôt', montant: '+40 000 FCFA', description: 'Versement salaire' },
  { date: '14/07/2025', type: 'Retrait', montant: '-8 000 FCFA', description: 'Paiement école' }
];

}
