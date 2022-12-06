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
  id: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getIngredientsById();
  }

  getIngredientsById() {
    this.httpProvider.getIngredientsById(this.id).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;

        for(let i = 0; i < resultData.length; i++){
          this.editIngredientsForm.Id = resultData[i].id;
          this.editIngredientsForm.name = resultData[i].name;
          this.editIngredientsForm.description = resultData[i].description;
        }
      }
    },
      (error: any) => { });
  }

  editIngredients(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      const dataJson = JSON.stringify(this.editIngredientsForm) 
      
      this.httpProvider.updateIngredientsById(this.id, dataJson).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData.rowsAffected >= 1) {
            if (resultData.rowsAffected >= 1) {
              this.toastr.success("Ingrédient modifié avec succès !");
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