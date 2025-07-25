import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demandes-annulation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demandes-annulation.component.html',
})
export class DemandeAnnulationComponent {
  transferts = [
    { id: 1, date: '2025-07-24', montant: 100000, destinataire: 'Sous-compte A', statut: 'Effectué' },
    { id: 2, date: '2025-07-22', montant: 80000, destinataire: 'Compte B', statut: 'Annulé' },
    { id: 3, date: '2025-07-20', montant: 50000, destinataire: 'Sous-compte B', statut: 'En attente d\'annulation' }
  ];

  demanderAnnulation(transfert: any) {
    // Logique de demande d'annulation
    transfert.statut = 'En attente d\'annulation';
    console.log('Demande d’annulation envoyée pour le transfert :', transfert);
  }
}
