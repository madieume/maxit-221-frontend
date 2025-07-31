import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- important

@Component({
  selector: 'app-demandes-annulation',
  standalone: true,
  imports: [CommonModule, RouterModule], // <-- ajoute RouterModule ici
  templateUrl: './demandes-annulation.component.html',
})
export class DemandeAnnulationComponent {
  transferts = [
    { id: 1, date: '2025-07-30', montant: 50000, destinataire: 'Aliou', statut: 'Effectué' },
    { id: 2, date: '2025-07-28', montant: 25000, destinataire: 'Bouba', statut: 'Annulé' },
    { id: 3, date: '2025-07-27', montant: 100000, destinataire: 'Amina', statut: 'En attente d\'annulation' }
  ];

  constructor(private router: Router) {}

  demanderAnnulation(transfert: any) {
    this.router.navigate(['/annulation-transfert', transfert.id]);
  }
}
