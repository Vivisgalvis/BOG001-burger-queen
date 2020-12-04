import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemOptionsModalComponent } from './order-item-options-modal.component';

describe('OrderItemOptionsModalComponent', () => {
  let component: OrderItemOptionsModalComponent;
  let fixture: ComponentFixture<OrderItemOptionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderItemOptionsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemOptionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
