import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDetailsLazyLoadingComponent } from './comic-details-lazy-loading.component';

describe('ComicDetailsLazyLoadingComponent', () => {
  let component: ComicDetailsLazyLoadingComponent;
  let fixture: ComponentFixture<ComicDetailsLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ComicDetailsLazyLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicDetailsLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
