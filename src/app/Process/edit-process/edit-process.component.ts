import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../Service/http-provider.service';


@Component({
  selector: 'app-edit-process',
  templateUrl: './edit-process.component.html',
  styleUrls: ['./edit-process.component.scss']
})
export class EditProcessComponent {
  editProcessForm: processForm = new processForm();

  @ViewChild("processForm")
  processForm!: NgForm;

  isSubmitted: boolean = false;
  id: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProcessById();
  }

  getProcessById() {
    this.httpProvider.getProcessById(this.id).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        for(let i = 0; i < resultData.length; i++){
          this.editProcessForm.Id = resultData[i].id;
          this.editProcessForm.name = resultData[i].name;
          this.editProcessForm.description = resultData[i].description;
          this.editProcessForm.modele = resultData[i].modele;
          this.editProcessForm.etapes = resultData[i].etapes;
          this.editProcessForm.test = resultData[i].test;
        }
      }
    },
      (error: any) => { });
  }

  editProcess(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      const dataJson = JSON.stringify(this.editProcessForm) 

      this.httpProvider.updateProcessById(this.id, dataJson).subscribe(async data => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData.rowsAffected >= 1) {
            if (resultData.rowsAffected >= 1) {
              this.toastr.success("Processus modifié avec succès !");
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

export class processForm {
  Id: number = 0;
  name: string = "";
  description: string = "";
  modele: string = "";
  etapes: string = "";
  test: string = "";
}