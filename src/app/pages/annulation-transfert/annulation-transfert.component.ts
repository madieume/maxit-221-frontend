import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';  // <-- importe DecimalPipe ici

@Component({
  selector: 'app-annulation-transfert',
  standalone: true,
  imports: [CommonModule, DecimalPipe],  // <-- ajoute DecimalPipe ici
  templateUrl: './annulation-transfert.component.html',
})
export class AnnulationTransfertComponent implements OnInit {
  transfertId!: string;
  transfertDetails: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.transfertId = this.route.snapshot.paramMap.get('id')!;

    // Données fictives
    this.transfertDetails = {
      id: this.transfertId,
      date: '2025-07-30',
      montant: 50000,
      emetteur: 'Aliou',
      recepteur: 'Alima',
      statut: 'Effectué',
      frais: 4000
    };
  }

  validerAnnulation() {
    alert(`Annulation du transfert ${this.transfertId} validée.`);
  }

  refuserAnnulation() {
    alert(`Annulation du transfert ${this.transfertId} refusée.`);
  }
}
