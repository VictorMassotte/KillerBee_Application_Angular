import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFreezbeComponent } from './add-freezbe.component';

describe('AddFreezbeComponent', () => {
  let component: AddFreezbeComponent;
  let fixture: ComponentFixture<AddFreezbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFreezbeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFreezbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
