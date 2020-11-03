import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkrolesComponent } from './workroles.component';

describe('WorkrolesComponent', () => {
  let component: WorkrolesComponent;
  let fixture: ComponentFixture<WorkrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkrolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
