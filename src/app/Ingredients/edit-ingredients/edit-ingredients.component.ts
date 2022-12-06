import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../Service/http-provider.service';

@Component({
  selector: 'app-edit-ingredients',
  templateUrl: './edit-ingredients.component.html',
  styleUrls: ['./edit-ingredients.component.scss']
})

export class EditIngredientsComponent {
  editIngredientsForm: ingredientsForm = new ingredientsForm();

  @ViewChild("ingredientsForm")
  ingredientsForm!: NgForm;

  isSubmitted: boolean = false;
  ingredientsId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.ingredientsId = this.route.snapshot.params['ingredientsId'];
    this.getIngredientsById();
  }

  getIngredientsById() {
    this.httpProvider.getIngredientsById(this.ingredientsId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editIngredientsForm.Id = resultData.id;
          this.editIngredientsForm.name = resultData.name;
          this.editIngredientsForm.description = resultData.description;
        }
      }
    },
      (error: any) => { });
  }

  editIngredients(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveProcess(this.editIngredients).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            if (resultData != null && resultData.isSuccess) {
              this.toastr.success(resultData.message);
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
  }
}

export class ingredientsForm {
  Id: number = 0;
  name: string = "";
  description: string = "";
}