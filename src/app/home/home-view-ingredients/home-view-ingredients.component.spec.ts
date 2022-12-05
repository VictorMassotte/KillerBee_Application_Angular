import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewIngredientsComponent } from './home-view-ingredients.component';

describe('HomeViewIngredientsComponent', () => {
  let component: HomeViewIngredientsComponent;
  let fixture: ComponentFixture<HomeViewIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeViewIngredientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeViewIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
