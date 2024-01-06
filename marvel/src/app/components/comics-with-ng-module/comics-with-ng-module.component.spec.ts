import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsWithNgModuleComponent } from './comics-with-ng-module.component';

describe('ComicsWithNgModuleComponent', () => {
  let component: ComicsWithNgModuleComponent;
  let fixture: ComponentFixture<ComicsWithNgModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ComicsWithNgModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicsWithNgModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
