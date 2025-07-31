import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nouvelle-transaction',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './nouvelle-transaction.component.html'
})
export class NouvelleTransactionComponent implements OnInit {
  id: string | null = null;

  transaction = {
    type: '',
    montant: 0,
    description: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID reçu :', this.id);
  }

  enregistrerTransaction() {
    console.log('Transaction enregistrée pour l’ID', this.id, ':', this.transaction);
    alert('Transaction enregistrée avec succès !');
    this.transaction = {
      type: '',
      montant: 0,
      description: ''
    };
  }
}
