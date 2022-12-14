import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../Service/http-provider.service';

@Component({
  selector: 'app-add-freezbe',
  templateUrl: './add-freezbe.component.html',
  styleUrls: ['./add-freezbe.component.scss']
})
export class AddFreezbeComponent {
  addFreezbeForm: freezbeForm = new freezbeForm();

  @ViewChild("freezbeForm")
  freezbeForm!: NgForm;

  isSubmitted: boolean = false;

  ingredientList: any = [];

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.httpProvider.getAllIngredients(localStorage.getItem('access_token')).subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.ingredientList = resultData;
        }
      }
    },
    (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.ingredientList = [];
            }
          }
        }
      });

  }

  AddFreezbe(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveFreezbe(this.addFreezbeForm, localStorage.getItem('access_token')).subscribe(async data => {
        console.log(data);
        if (data != null) {
          this.toastr.success("Freezbe ajouté avec succès !");
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 500);
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

export class freezbeForm {
  name: string = "";
  description: string = "";
  pUHT: number = 0;
  gamme: string = "";
  ingredients: string = "";
  grammage: number = 0;

}