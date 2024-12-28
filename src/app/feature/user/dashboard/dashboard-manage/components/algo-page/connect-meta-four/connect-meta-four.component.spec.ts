import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectMetaFourComponent } from './connect-meta-four.component';

describe('ConnectMetaFourComponent', () => {
  let component: ConnectMetaFourComponent;
  let fixture: ComponentFixture<ConnectMetaFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectMetaFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectMetaFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
