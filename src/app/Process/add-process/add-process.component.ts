import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../Service/http-provider.service';

@Component({
  selector: 'app-add-process',
  templateUrl: './add-process.component.html',
  styleUrls: ['./add-process.component.scss']
})
export class AddProcessComponent {
  addProcessForm: processForm = new processForm();

  @ViewChild("processForm")
  processForm!: NgForm;

  isSubmitted: boolean = false;

  constructor(private router: Router, private httpProvider: HttpProviderService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  AddProcess(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveProcess(this.addProcessForm).subscribe(async data => {
        if (data != null) {
          this.toastr.success("Process ajouté avec succès !");
          setTimeout(() => {
            this.router.navigate(['/Home']);
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

export class processForm {
  name: string = "";
  description: string = "";
  modele: string = "";
  etapes: string = "";
  test: string = "";

}