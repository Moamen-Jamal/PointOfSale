import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/Services/category.service';

@Component({
  selector: 'app-add-razor-category',
  templateUrl: './add-razor-category.component.html',
  styleUrls: ['./add-razor-category.component.css']
})
export class AddRazorCategoryComponent implements OnInit {

  constructor( private toaster: ToastrService, private service: CategoryService) { }

  ngOnInit(): void {
          this.service.AddCategoryRazor().subscribe(
            (data: any) => {
            //   if (data.successed) {
                
            //     this.toaster.success(data.message);
            //     this.router.navigate(['categories']);
            //   }
            //   else{
            //     this.toaster.error(data.message);
            //     this.isLoading = false;
            //   }
            // },
            // (err) => {
            //   this.isLoading = false;
            // }
  });
  }

}
