import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-gestion-comptes',
  standalone: true, 
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './gestion-comptes.component.html'
})
export class GestionComptesComponent {
  comptesOriginaux = [
    { id: 1, numero: '771234567', montant: 1000000, etat: 'Actif' },
    { id: 2, numero: '787234689', montant: 50000, etat: 'Bloquer' },
    { id: 3, numero: '779234554', montant: 1500000, etat: 'Actif' },
    { id: 4, numero: '764234560', montant: 20000, etat: 'Bloquer' },
    { id: 5, numero: '708234531', montant: 80000, etat: 'Actif' }
  ];

  comptes = [...this.comptesOriginaux];

  etatSelectionne: string = '';

  constructor(private router: Router) {}

  voirDetail(id: number) {
    this.router.navigate(['/details', id]);
  }

  filtrerParEtat() {
    if (this.etatSelectionne === '') {
      this.comptes = [...this.comptesOriginaux];
    } else {
      this.comptes = this.comptesOriginaux.filter(
        compte => compte.etat === this.etatSelectionne
      );
    }
  }
}
