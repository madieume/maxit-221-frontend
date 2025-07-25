import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';    // pour *ngFor, ngClass, pipes comme number, etc.
import { FormsModule } from '@angular/forms';      // pour ngModel

interface SousCompte {
  numero: string;
  bloque: boolean;
  montant: number;
  estPrincipal: boolean;
}

@Component({
  selector: 'app-sous-comptes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sous-comptes.component.html',
})
export class SousComptesComponent {
  sousComptes: SousCompte[] = [
    { numero: '771234567', bloque: false, montant: 100000, estPrincipal: false },
    { numero: '778765432', bloque: true, montant: 50000, estPrincipal: false },
  ];

  nouveauSousCompte: Partial<SousCompte> = {
    numero: '',
    bloque: false,
    montant: 0,
    estPrincipal: false,
  };

  comptePrincipalMontant = 500000; // Solde compte principal

  creerSousCompte() {
    if (this.nouveauSousCompte.numero) {
      this.sousComptes.push({
        numero: this.nouveauSousCompte.numero,
        bloque: false,
        montant: 0,
        estPrincipal: false,
      });
      this.nouveauSousCompte.numero = '';
      alert('Sous compte créé avec succès');
    }
  }

  bloquerSousCompte(sc: SousCompte) {
    sc.bloque = true;
  }

  debloquerSousCompte(sc: SousCompte) {
    sc.bloque = false;
  }

  depotDepuisPrincipal(sc: SousCompte) {
    const montantDepot = prompt('Montant à déposer depuis le compte principal (FCFA):');
    const montant = montantDepot ? Number(montantDepot) : 0;
    if (montant > 0 && montant <= this.comptePrincipalMontant) {
      sc.montant += montant;
      this.comptePrincipalMontant -= montant;
      alert(`Dépôt de ${montant.toLocaleString()} FCFA effectué.`);
    } else {
      alert("Montant invalide ou solde insuffisant.");
    }
  }

  changerEnPrincipal(sc: SousCompte) {
    if (sc.bloque) {
      alert('Impossible de changer un compte bloqué en compte principal.');
      return;
    }
    this.sousComptes.forEach(c => {
      if (c.estPrincipal) c.estPrincipal = false;
    });
    sc.estPrincipal = true;
    alert(`Le compte ${sc.numero} est maintenant le compte principal.`);
  }
}
