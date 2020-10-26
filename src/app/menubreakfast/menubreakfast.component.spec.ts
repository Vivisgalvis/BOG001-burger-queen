import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubreakfastComponent } from './menubreakfast.component';

describe('MenubreakfastComponent', () => {
  let component: MenubreakfastComponent;
  let fixture: ComponentFixture<MenubreakfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubreakfastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
