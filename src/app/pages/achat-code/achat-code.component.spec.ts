import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatCodeComponent } from './achat-code.component';

describe('AchatCodeComponent', () => {
  let component: AchatCodeComponent;
  let fixture: ComponentFixture<AchatCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchatCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchatCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
