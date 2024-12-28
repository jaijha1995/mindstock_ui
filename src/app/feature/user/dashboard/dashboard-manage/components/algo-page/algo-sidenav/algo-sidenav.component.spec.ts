import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoSidenavComponent } from './algo-sidenav.component';

describe('AlgoSidenavComponent', () => {
  let component: AlgoSidenavComponent;
  let fixture: ComponentFixture<AlgoSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlgoSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlgoSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
