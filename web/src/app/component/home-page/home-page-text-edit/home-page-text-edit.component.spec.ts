import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTextEditComponent } from './home-page-text-edit.component';

describe('HomePageTextEditComponent', () => {
  let component: HomePageTextEditComponent;
  let fixture: ComponentFixture<HomePageTextEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageTextEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageTextEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
