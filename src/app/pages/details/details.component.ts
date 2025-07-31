import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail-compte',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html'
})
export class DetailCompteComponent {
  compte = {
    nom: 'Ndiaye',
    prenom: 'Abdoulaye',
    tel: '771234567',
    nci: '1234567891011',
    adresse: 'Dakar'
  };

  montantTransfert: number = 0;
  fraisPrisEnCharge: boolean = false;
  compteDestinataire: string = '';
  typeTransfert: 'sous-compte' | 'autre-compte' = 'sous-compte';

  get fraisTransfert(): number {
    return this.typeTransfert === 'autre-compte' && !this.fraisPrisEnCharge
      ? this.montantTransfert * 0.08
      : 0;
  }

  creerSousCompte() {
    alert("Sous-compte créé !");
  }

  bloquerSousCompte() {
    alert("Sous-compte bloqué !");
  }

  changerEnPrincipal() {
    alert("Sous-compte devenu compte principal !");
  }

  effectuerTransfert() {
    const frais = this.fraisTransfert;
    alert(`Transfert effectué. Frais: ${frais} FCFA`);
  }
}
