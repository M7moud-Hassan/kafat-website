import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTypesComponent } from './work-types.component';

describe('WorkTypesComponent', () => {
  let component: WorkTypesComponent;
  let fixture: ComponentFixture<WorkTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
