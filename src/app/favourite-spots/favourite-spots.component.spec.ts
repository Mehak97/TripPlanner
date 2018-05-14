import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteSpotsComponent } from './favourite-spots.component';

describe('FavouriteSpotsComponent', () => {
  let component: FavouriteSpotsComponent;
  let fixture: ComponentFixture<FavouriteSpotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteSpotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
