import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // pour ngModel

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historique.component.html'
})
export class HistoriqueComponent {
  filtreType = '';

 transactions = [
  { date: '2025-07-23', type: 'Paiement', montant: -20000, description: 'Achat au supermarché' },
  { date: '2025-07-22', type: 'Dépôt', montant: 50000, description: 'Dépôt en guichet' },
  { date: '2025-07-20', type: 'Transfert', montant: -15000, description: 'Transfert à Ali' },
  { date: '2025-07-18', type: 'Retrait', montant: -30000, description: 'Retrait au DAB' },
  { date: '2025-07-17', type: 'Paiement', montant: -10000, description: 'Facture d’électricité' },
  { date: '2025-07-15', type: 'Dépôt', montant: 60000, description: 'Versement mobile money' },
  { date: '2025-07-14', type: 'Transfert', montant: -25000, description: 'Transfert à Mamadou' },
  { date: '2025-07-12', type: 'Retrait', montant: -20000, description: 'Retrait guichet automatique' },
  { date: '2025-07-11', type: 'Paiement', montant: -5000, description: 'Abonnement internet' },
  { date: '2025-07-10', type: 'Dépôt', montant: 45000, description: 'Versement salaire' },
];

  transactionsFiltrees() {
    if (!this.filtreType) return this.transactions;
    return this.transactions.filter(t => t.type === this.filtreType);
  }
}
