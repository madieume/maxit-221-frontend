import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueTransfertsComponent } from './historique-transferts.component';

describe('HistoriqueTransfertsComponent', () => {
  let component: HistoriqueTransfertsComponent;
  let fixture: ComponentFixture<HistoriqueTransfertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueTransfertsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoriqueTransfertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
