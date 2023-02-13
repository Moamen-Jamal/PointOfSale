import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private toaster: ToastrService, private service: CategoryService
    , private router: Router, private datePipe: DatePipe) { }

  todayDate = new Date();
  tomorrowDate = new Date();
  addCategory: Category = {} as Category;
  isLoading : boolean = false;
  ngOnInit(): void {
    const today = new Date();
    this.tomorrowDate = new Date(today.setDate(today.getDate() + 1));
    this.addCategory = {
      id: 0,
      title: '',
      from: '',
      to: ''}
  }
  OnAdd() {
    if (!this.validateTime()) {
      this.toaster.warning('From Date must be less than To Date');
      return;
    }
    if (!this.validateInputs) {
      this.toaster.warning('Please, fill all fields');
      return;
    }
    this.isLoading = true;
    this.service.AddCategory(this.addCategory).subscribe(
      (data: any) => {
        if (data.successed) {
          this.isLoading = false;
          this.addCategory = data
          this.toaster.success(data.message);
          this.router.navigate(['categories']);
        }
        else{
          this.toaster.error(data.message);
          this.isLoading = false;
        }
      },
      (err) => {
        this.isLoading = false;
      }
    );
  }
  validateInputs() {
    let isValid = true;
    if (!this.addCategory.title || !this.addCategory.to || !this.addCategory.from) {
      isValid = false;
      return isValid;
    }
    return isValid;
  }
  validateTime() {
    let isValid = true;
    if (this.addCategory.to.getDate() <= this.addCategory.from.getDate()) {
      isValid = false;
      return isValid;
    }
    return isValid;
  }
  changeFromDate(event: any) {
    this.addCategory.from = event.value;;
  }
  changeToDate(event: any) {
    this.addCategory.to = event.value;;

  }
  onClosed(formControl:any){
    formControl.control.markAsTouched();
  }
  disableDatePicker(){
    return false;
  }
}
