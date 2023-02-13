import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/Services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  constructor(private service: CategoryService, private toaster: ToastrService) { }
  options = { itemsPerPage: 3, currentPage: 1, id: 'pagination', totalItems: 200 };
  Categories: Category[] = [];
  CategoryTitle: string = "";
  isLoading : boolean = false;
  isDescending: boolean =false;
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.getAll(this.options.currentPage, 3);
  }
  getAll(pageIndex:number, pageSize:number) {
    this.isLoading = true;
    this.service.GetCategories(pageIndex, pageSize,this.isDescending).subscribe(
      (res: any) => {
        this.isLoading = false;
        debugger;
        this.options.totalItems = res.data.records;
        this.Categories = res.data.result
      },(error) =>{
        this.isLoading = false;
      }
    )
  }
  getNextPrevData(pageIndex:number) {

    this.getAll(pageIndex, 3);
    this.options.currentPage = pageIndex;
  }
  Delete(ID:number){
    if (confirm('Are you sure to delete this Category?')) {
      this.isLoading = true;
      this.service.DeleteCategory(ID).subscribe((data :any) => {
        if(data.successed){
          this.options.currentPage = 1;
          this.loadData();
          this.isLoading = false;       
          this.toaster.error(data.message); 
      }
      else{
        this.toaster.error(data.message);
        this.isLoading = false;
      }
      },
      (err) => {
        this.isLoading = false;
      })
    }
  }
  searchByTitle(){
    if(this.CategoryTitle.trim()){
      this.isLoading = true;
      const pageIndex = 1;
      const pageSize = 3;
      this.service.getAllBySearch(pageIndex,pageSize,this.CategoryTitle).subscribe(
        (res: any) => {
          this.isLoading = false;
          debugger;
          if(res.data.result && res.data.result.length > 0){
            this.options.totalItems = res.data.records;
            this.options.currentPage = 1;
            this.options.itemsPerPage = 3;
            this.Categories = res.data.result;
          }
          else{
            this.toaster.warning("No Data Found");
          }
          
        },(error) =>{
          this.isLoading = false;
        }
      )
    }
    else{
      this.loadData();
    }
  }
  DescendingData(isDesc:boolean){
    this.isDescending = isDesc;
    this.isLoading = true;
    const pageIndex = 1;
      const pageSize = 3;
    this.service.GetCategories(pageIndex, pageSize,isDesc).subscribe(
      (res: any) => {
        this.isLoading = false;
        this.options.currentPage = 1;
        this.options.itemsPerPage = 3;
        this.options.totalItems = res.data.records;
        this.Categories = res.data.result
      },(error) =>{
        this.isLoading = false;
      }
    )
  }
}
