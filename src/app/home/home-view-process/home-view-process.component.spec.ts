import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewProcessComponent } from './home-view-process.component';

describe('HomeViewProcessComponent', () => {
  let component: HomeViewProcessComponent;
  let fixture: ComponentFixture<HomeViewProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeViewProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeViewProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
