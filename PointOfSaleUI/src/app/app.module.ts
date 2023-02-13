import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesListComponent } from './Components/Categories/categories-list/categories-list.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { EditCategoryComponent } from './Components/edit-category/edit-category.component';
import { DatePipe } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NgxLoadingModule } from 'ngx-loading';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddRazorCategoryComponent } from './Components/add-razor-category/add-razor-category.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddRazorCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    FontAwesomeModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
