import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyMobileEmailComponent } from './verify-mobile-email.component';

describe('VerifyMobileEmailComponent', () => {
  let component: VerifyMobileEmailComponent;
  let fixture: ComponentFixture<VerifyMobileEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyMobileEmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerifyMobileEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
