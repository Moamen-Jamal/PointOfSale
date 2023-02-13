import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { AddRazorCategoryComponent } from './Components/add-razor-category/add-razor-category.component';
import { CategoriesListComponent } from './Components/Categories/categories-list/categories-list.component';
import { EditCategoryComponent } from './Components/edit-category/edit-category.component';

const routes: Routes = [
  {
    path:'',
    component: CategoriesListComponent
  },
  {
    path:'categories',
    component: CategoriesListComponent
  },
  {
    path:'addCategory',
    component: AddCategoryComponent
  },
  {
    path:'addRazorCategory',
    component: AddRazorCategoryComponent
  },
  {
    path:'addCategory/:app',
    component: AddCategoryComponent
  },
  {
    path:'editCategory/:id',
    component: EditCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
