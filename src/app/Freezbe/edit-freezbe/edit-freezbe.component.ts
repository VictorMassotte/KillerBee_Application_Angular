import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../Service/http-provider.service';

@Component({
  selector: 'app-edit-freezbe',
  templateUrl: './edit-freezbe.component.html',
  styleUrls: ['./edit-freezbe.component.scss']
})
export class EditFreezbeComponent {
  editFreezbeForm: freezbeForm = new freezbeForm();

  @ViewChild("freezbeForm")
  freezbeForm!: NgForm;

  isSubmitted: boolean = false;
  id: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getFreezbeById();
  }

  getFreezbeById() {
    this.httpProvider.getFreezbeById(this.id).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;

        for(let i = 0; i < resultData.length; i++){
          this.editFreezbeForm.Id = resultData[i].id;
          this.editFreezbeForm.name = resultData[i].name;
          this.editFreezbeForm.description = resultData[i].description;
          this.editFreezbeForm.pUHT = resultData[i].pUHT;
          this.editFreezbeForm.gamme = resultData[i].gamme;
          this.editFreezbeForm.grammage = resultData[i].grammage;
          this.editFreezbeForm.ingredients = resultData[i].ingredients;
        }
        
      }
    },
      (error: any) => { });
  }

  editFreezbe(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {

      const dataJson = JSON.stringify(this.editFreezbeForm) 
      console.log(dataJson);
      this.httpProvider.updateFreezbeId(this.id, dataJson).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData.rowsAffected >= 1) {
            if (resultData.rowsAffected >= 1) {
              this.toastr.success("Freezbe modifié avec succès !");
              setTimeout(() => {
                this.router.navigate(['/home']);
              }, 500);
            }
          }
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

export class freezbeForm {
  Id: number = 0;
  name: string = "";
  description: string = "";
  pUHT: number = 0;
  gamme: string = "";
  ingredients: string = "";
  grammage: number = 0;
}