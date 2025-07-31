import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleTransactionComponent } from './nouvelle-transaction.component';

describe('NouvelleTransactionComponent', () => {
  let component: NouvelleTransactionComponent;
  let fixture: ComponentFixture<NouvelleTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelleTransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouvelleTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
