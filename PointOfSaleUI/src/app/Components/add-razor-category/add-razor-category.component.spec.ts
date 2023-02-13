import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRazorCategoryComponent } from './add-razor-category.component';

describe('AddRazorCategoryComponent', () => {
  let component: AddRazorCategoryComponent;
  let fixture: ComponentFixture<AddRazorCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRazorCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRazorCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
