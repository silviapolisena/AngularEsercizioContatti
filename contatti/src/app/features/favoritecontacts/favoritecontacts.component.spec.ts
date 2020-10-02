import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritecontactsComponent } from './favoritecontacts.component';

describe('FavoritecontactsComponent', () => {
  let component: FavoritecontactsComponent;
  let fixture: ComponentFixture<FavoritecontactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritecontactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritecontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
