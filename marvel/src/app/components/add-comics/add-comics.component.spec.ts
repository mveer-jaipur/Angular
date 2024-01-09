import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComicsComponent } from './add-comics.component';

describe('AddComicsComponent', () => {
  let component: AddComicsComponent;
  let fixture: ComponentFixture<AddComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
