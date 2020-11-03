import { ComponentFixture, TestBed } from '@angular/core/testing';

import { selectRoleComponent } from './selectRole.component';

describe('selectRoleComponent', () => {
  let component: selectRoleComponent;
  let fixture: ComponentFixture<selectRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ selectRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(selectRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
