import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/Services/category.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private Router: Router, private route: ActivatedRoute, private service: CategoryService
    , private toaster: ToastrService, private datePipe: DatePipe) { }

  editCategory: Category = {} as Category;
  todayDate = new Date();
  tomorrowDate = new Date();
  isLoading : boolean = false;
  ngOnInit(): void {
    const today = new Date();
    this.tomorrowDate = new Date(today.setDate(today.getDate() + 1));
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        const CategoryID = Number(id);
        if (id) {
          this.service.GetCategoryDetails(CategoryID).subscribe((res: any) => {
            const FromDate = res.data.from.split('T')[0];
            const ToDate = res.data.to.split('T')[0];
            this.editCategory = res.data;
            this.editCategory.from = new Date(FromDate);
            this.editCategory.to = new Date(ToDate);
            if(this.editCategory.to < this.tomorrowDate.getTime())
              this.tomorrowDate = this.editCategory.to;
          })
        }
      }
    })
  }

  OnUpdate() {
    if (!this.validateTime()) {
      this.toaster.warning('From Date must be less than To Date');
      return;
    }
    if (!this.validateInputs) {
      this.toaster.warning('Please, fill all fields');
      return;
    }
    this.editCategory.to = this.datePipe.transform(this.editCategory.to, 'yyyy-MM-dd');
    this.editCategory.from = this.datePipe.transform(this.editCategory.from, 'yyyy-MM-dd');
    this.isLoading = true;
    this.service.UpdateCategory(this.editCategory.id, this.editCategory).subscribe(
      (data: any) => {
        if (data.successed) {
        this.toaster.success(data.message);
        this.Router.navigate(['categories']);
        }
        else{
          this.toaster.error(data.message);
          this.isLoading = false;
        }
      },
      (err) => {
        this.isLoading = false;
      }
    )
  }
  validateInputs() {
    let isValid = true;
    if (!this.editCategory.title || !this.editCategory.to || !this.editCategory.from) {
      isValid = false;
      return isValid;
    }
    return isValid;
  }
  validateTime() {
    let isValid = true;
    if (this.editCategory.to.getDate() <= this.editCategory.from.getDate()) {
      isValid = false;
      return isValid;
    }
    return isValid;
  }
  changeFromDate(event: any) {
    this.editCategory.from = event.value;
  }
  changeToDate(event: any) {
    this.editCategory.to = event.value;
  }
  onClosed(formControl:any){
    formControl.control.markAsTouched();
  }
  disableDatePicker(){
    return false;
  }
}
