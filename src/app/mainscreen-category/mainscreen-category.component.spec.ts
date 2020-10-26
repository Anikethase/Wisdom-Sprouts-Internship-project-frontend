import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainscreenCategoryComponent } from './mainscreen-category.component';

describe('MainscreenCategoryComponent', () => {
  let component: MainscreenCategoryComponent;
  let fixture: ComponentFixture<MainscreenCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainscreenCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainscreenCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
