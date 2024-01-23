import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalTicketsComponent } from './portal-tickets.component';

describe('PortalTicketsComponent', () => {
  let component: PortalTicketsComponent;
  let fixture: ComponentFixture<PortalTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortalTicketsComponent]
    });
    fixture = TestBed.createComponent(PortalTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
