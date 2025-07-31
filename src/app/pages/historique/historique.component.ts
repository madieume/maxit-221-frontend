import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './historique.component.html'
})
export class HistoriqueComponent {
  filtreType = '';

  transactions = [
    { id: 1, date: '2025-07-23', type: 'Paiement', montant: -20000, description: 'Achat au supermarché' },
    { id: 2, date: '2025-07-22', type: 'Dépôt', montant: 50000, description: 'Dépôt en guichet' },
    { id: 3, date: '2025-07-20', type: 'Transfert', montant: -15000, description: 'Transfert à Ali' },
    { id: 4, date: '2025-07-18', type: 'Retrait', montant: -30000, description: 'Retrait au DAB' },
    { id: 5, date: '2025-07-17', type: 'Paiement', montant: -10000, description: 'Facture d’électricité' },
    { id: 6, date: '2025-07-15', type: 'Dépôt', montant: 60000, description: 'Versement mobile money' },
    { id: 7, date: '2025-07-14', type: 'Transfert', montant: -25000, description: 'Transfert à Mamadou' },
    { id: 8, date: '2025-07-12', type: 'Retrait', montant: -20000, description: 'Retrait guichet automatique' },
    { id: 9, date: '2025-07-11', type: 'Paiement', montant: -5000, description: 'Abonnement internet' },
    { id: 10, date: '2025-07-10', type: 'Dépôt', montant: 45000, description: 'Versement salaire' },
    { id: 11, date: '2025-07-11', type: 'Achat', montant: -5000, description: 'Achat senelec' },
    { id: 12, date: '2025-07-24', type: 'Achat', montant: -10000, description: 'Achat senelec' },
  ];

  transactionsFiltrees() {
    if (!this.filtreType) return this.transactions;
    return this.transactions.filter(t => t.type === this.filtreType);
  }
}
