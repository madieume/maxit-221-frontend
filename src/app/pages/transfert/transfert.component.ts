import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transfert',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './transfert.component.html',
})
export class TransfertComponent implements OnInit {
  transfertForm: FormGroup;
  frais: number = 0;
  total: number = 0;
  transfertId?: number; // Pour stocker l'id si passé en query param

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.transfertForm = this.fb.group({
      montant: [0],
      priseEnCharge: [false],
      destinataireType: ['sous-compte'],
      datePlanifiee: ['']
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['transfertId']) {
        this.transfertId = +params['transfertId'];
        // Si besoin, ici tu peux pré-remplir ou charger les données liées à ce transfertId
        console.log('Transfert ID reçu en paramètre :', this.transfertId);
      }
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
      console.log('Transfert envoyé:', this.transfertForm.value, 'avec ID:', this.transfertId);
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
