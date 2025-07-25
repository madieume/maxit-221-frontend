import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transfert',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './transfert.component.html',
  // Supprime cette ligne si tu n'as pas de CSS
  // styleUrls: ['./transfert.component.css']
})
export class TransfertComponent {
  transfertForm: FormGroup;
  frais: number = 0;
  total: number = 0;

  constructor(private fb: FormBuilder) {
    this.transfertForm = this.fb.group({
      montant: [0],
      priseEnCharge: [false],
      destinataireType: ['sous-compte'],
      datePlanifiee: ['']
    });
  }

  calculerFrais() {
    const montant = this.transfertForm.value.montant || 0;
    const priseEnCharge = this.transfertForm.value.priseEnCharge;
    const destinataireType = this.transfertForm.value.destinataireType;

    if (destinataireType === 'sous-compte') {
      this.frais = 0;
    } else {
      const fraisCalcul = montant * 0.08;
      this.frais = priseEnCharge ? fraisCalcul : 0;
    }
    this.total = montant + this.frais;
  }

  envoyerTransfert() {
    if (this.transfertForm.valid) {
      console.log('Transfert envoyé:', this.transfertForm.value);
      alert('Transfert effectué avec succès !');
      this.transfertForm.reset({
        montant: 0,
        priseEnCharge: false,
        destinataireType: 'sous-compte',
        datePlanifiee: ''
      });
      this.frais = 0;
      this.total = 0;
    } else {
      alert('Veuillez remplir correctement le formulaire.');
    }
  }
}
