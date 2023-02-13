import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http :HttpClient) { }
  
  GetAllCategories(){
    return this.http.get(environment.apiURL+"api/Category/GetAllCategories")
  }
  
  AddCategory(data :any){
    return this.http.post(environment.apiURL+"api/Category/AddCategory" , data)
  }
  AddCategoryRazor(){
    return this.http.get(environment.apiURL+"api/Shared/CategoryRazor")
  }
  UpdateCategory(ID:number,Data:any){
    return this.http.put(environment.apiURL+"api/Category/UpdateCategory/"+ID , Data)
  }
  GetCategoryDetails(id :number){
    return this.http.get(environment.apiURL+"api/Category/GetByID/"+id)
  }
  DeleteCategory(id :number){
    return this.http.delete(environment.apiURL+"api/Category/DeleteCategory/"+id);
  }
  GetCategories(pageIndex:number,pageSize:number,isDescinding:boolean){
    return this.http.get(environment.apiURL+`api/Category/GetFilteredCategories?pageIndex=${pageIndex}&pageSize=${pageSize}&isDescinding=${isDescinding}`);
  }
  getAllBySearch  
  (pageIndex:number,pageSize:number ,title =""){
    return this.http.get
    (environment.apiURL+`api/Category/GetFilteredCategories?pageIndex=${pageIndex}&pageSize=${pageSize}&title=${title}`);
  }
}
