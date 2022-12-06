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
  processId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.processId = this.route.snapshot.params['processId'];
    this.getProcessById();
  }

  getProcessById() {
    this.httpProvider.getProcessById(this.processId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editProcessForm.Id = resultData.id;
          this.editProcessForm.name = resultData.name;
          this.editProcessForm.description = resultData.description;
          this.editProcessForm.modele = resultData.modele;
          this.editProcessForm.etape = resultData.etape;
          this.editProcessForm.test = resultData.test;
        }
      }
    },
      (error: any) => { });
  }

  editProcess(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveProcess(this.editProcessForm).subscribe(async data => {
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

export class processForm {
  Id: number = 0;
  name: string = "";
  description: string = "";
  modele: string = "";
  etape: string = "";
  test: string = "";
}