import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectMetaFiveComponent } from './connect-meta-five.component';

describe('ConnectMetaFiveComponent', () => {
  let component: ConnectMetaFiveComponent;
  let fixture: ComponentFixture<ConnectMetaFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConnectMetaFiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConnectMetaFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
