import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Transaction {
  id: number;
  date: string;
  montant: number;
  codeWoyofal: string;
}

@Component({
  selector: 'app-paiement',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss'],
})
export class PaiementComponent {
  paiementForm: FormGroup;
  transactions: Transaction[] = [];
  transactionId = 1;

  constructor(private fb: FormBuilder) {
    this.paiementForm = this.fb.group({
      montant: [null, [Validators.required, Validators.min(100)]],
      numeroClient: ['', Validators.required],
    });
  }

  envoyerDemandeAchat() {
    if (this.paiementForm.invalid) {
      alert('Merci de remplir tous les champs correctement.');
      return;
    }
    // Simuler un appel à une API d'achat code Woyofal Senelec
    const codeAchat = 'WOYO-' + Math.floor(Math.random() * 1000000);
    alert(`Demande d'achat envoyée avec succès. Code généré : ${codeAchat}`);

    // Enregistrer la transaction localement
    this.transactions.push({
      id: this.transactionId++,
      date: new Date().toLocaleString(),
      montant: this.paiementForm.value.montant,
      codeWoyofal: codeAchat,
    });

    this.paiementForm.reset();
  }

  recupererAchat(code: string) {
    const trx = this.transactions.find(t => t.codeWoyofal === code);
    if (trx) {
      alert(`Transaction trouvée:\nMontant: ${trx.montant} FCFA\nDate: ${trx.date}`);
    } else {
      alert('Code Woyofal non trouvé.');
    }
  }
}
