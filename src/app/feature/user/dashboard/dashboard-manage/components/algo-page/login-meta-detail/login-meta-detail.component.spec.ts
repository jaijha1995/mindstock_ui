import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMetaDetailComponent } from './login-meta-detail.component';

describe('LoginMetaDetailComponent', () => {
  let component: LoginMetaDetailComponent;
  let fixture: ComponentFixture<LoginMetaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginMetaDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginMetaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
