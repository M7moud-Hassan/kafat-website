import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactInformationComponent } from './add-contact-information.component';

describe('AddContactInformationComponent', () => {
  let component: AddContactInformationComponent;
  let fixture: ComponentFixture<AddContactInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
