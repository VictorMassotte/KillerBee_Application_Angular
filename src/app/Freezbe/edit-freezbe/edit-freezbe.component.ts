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
  freezbeId: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.freezbeId = this.route.snapshot.params['freezbeId'];
    this.getFreezbeById();
  }

  getFreezbeById() {
    this.httpProvider.getFreezbeById(this.freezbeId).subscribe((data: any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.editFreezbeForm.Id = resultData.id;
          this.editFreezbeForm.name = resultData.name;
          this.editFreezbeForm.description = resultData.description;
          this.editFreezbeForm.pUHT = resultData.pUHT;
          this.editFreezbeForm.gamme = resultData.gamme;
          this.editFreezbeForm.grammage = resultData.grammage;

        }
      }
    },
      (error: any) => { });
  }

  editFreezbe(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveProcess(this.editFreezbe).subscribe(async data => {
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

export class freezbeForm {
  Id: number = 0;
  name: string = "";
  description: string = "";
  pUHT: number = 0;
  gamme: string = "";
  ingredients: string = "";
  grammage: number = 0;
}