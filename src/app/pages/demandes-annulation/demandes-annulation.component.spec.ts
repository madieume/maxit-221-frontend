import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesAnnulationComponent } from './demandes-annulation.component';

describe('DemandesAnnulationComponent', () => {
  let component: DemandesAnnulationComponent;
  let fixture: ComponentFixture<DemandesAnnulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandesAnnulationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandesAnnulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
