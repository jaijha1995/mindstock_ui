import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoHeaderComponent } from './algo-header.component';

describe('AlgoHeaderComponent', () => {
  let component: AlgoHeaderComponent;
  let fixture: ComponentFixture<AlgoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlgoHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlgoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
