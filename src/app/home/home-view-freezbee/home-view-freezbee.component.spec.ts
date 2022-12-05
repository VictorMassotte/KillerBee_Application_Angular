import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewFreezbeeComponent } from './home-view-freezbee.component';

describe('HomeViewFreezbeeComponent', () => {
  let component: HomeViewFreezbeeComponent;
  let fixture: ComponentFixture<HomeViewFreezbeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeViewFreezbeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeViewFreezbeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
