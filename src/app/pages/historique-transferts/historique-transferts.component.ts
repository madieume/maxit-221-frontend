import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Transfert {
  id: number;
  date: string; 
  montant: number;
  destinataire: string;
  type: 'sous-compte' | 'autre';
  statut: 'Effectué' | 'Annulé' | 'En attente d\'annulation';
}

@Component({
  selector: 'app-historique-transferts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './historique-transferts.component.html',
})
export class HistoriqueTransfertsComponent {
  transferts: Transfert[] = [
    { id: 1, date: '2025-07-23', montant: 100000, destinataire: '771234567', type: 'sous-compte', statut: 'Effectué' },
    { id: 2, date: '2025-07-22', montant: 50000, destinataire: '778765432', type: 'autre', statut: 'Annulé' },
    { id: 3, date: '2025-07-20', montant: 75000, destinataire: '779998877', type: 'autre', statut: 'Effectué' },
    { id: 4, date: '2025-07-19', montant: 30000, destinataire: '771112223', type: 'sous-compte', statut: 'En attente d\'annulation' },
  ];

  filtreType: string = '';

  constructor(private router: Router) {}

  get transfertsFiltres(): Transfert[] {
    // Filtre par type si choisi, sinon tous
    let filtered = this.transferts;
    if (this.filtreType) {
      filtered = filtered.filter(t => t.type === this.filtreType);
    }
    // Trie par date décroissante
    return filtered.sort((a, b) => b.date.localeCompare(a.date));
  }

  allerEffectuerTransfert(id: number) {
    this.router.navigate(['/transfert', id]);
  }
}
