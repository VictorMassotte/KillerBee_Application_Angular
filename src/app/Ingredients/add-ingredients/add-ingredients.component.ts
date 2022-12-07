import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../Service/http-provider.service';

@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.scss']
})
export class AddIngredientsComponent {
  addIngredientsForm: ingredientsForm = new ingredientsForm();

  @ViewChild("ingredientsForm")
  ingredientsForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddIngredients(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveIngredients(this.addIngredientsForm).subscribe(async data => {
        if (data != null) {
          this.toastr.success("Ingrédient ajouté avec succès !");
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 500);
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 500);
        });
    }
  }

}

export class ingredientsForm {
  name: string = "";
  description: string = "";
}