import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnulationTransfertComponent } from './annulation-transfert.component';

describe('AnnulationTransfertComponent', () => {
  let component: AnnulationTransfertComponent;
  let fixture: ComponentFixture<AnnulationTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnulationTransfertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnnulationTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
