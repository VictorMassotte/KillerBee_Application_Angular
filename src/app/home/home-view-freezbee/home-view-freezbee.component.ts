import { Component, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../../Service/http-provider.service';

@Component({
  selector: 'ng-modal-confirm',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">Confirmation de la suppression</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Vous êtes sûr de vouloir supprimer ?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Annuler</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">OK</button>
  </div>
  `,
})
export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};
@Component({
  selector: 'app-home-view-freezbee',
  templateUrl: './home-view-freezbee.component.html',
  styleUrls: ['./home-view-freezbee.component.scss']
})

export class HomeViewFreezbeeComponent {
  closeResult = '';
  freezbeList: any = [];

  constructor(private router: Router, private modalService: NgbModal,
    private toastr: ToastrService, private httpProvider : HttpProviderService) { }

  ngOnInit(): void {
    this.getAllFreezbe();
  }

  async getAllFreezbe() {
    this.httpProvider.getAllFreezbe(localStorage.getItem('access_token')).subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.freezbeList = resultData;
        }
      }
    },
    (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.freezbeList = [];
            }
          }
        }
      });
  }

  AddFreezbe() {
    this.router.navigate(['AddFreezbe']);
  }

  deleteFreezbeConfirmation(freezbe: any) {
    this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then((result) => {
        this.deleteFreezbe(freezbe);
      },
        (reason) => {});
  }

  deleteFreezbe(freezbe: any) {
    this.httpProvider.deleteFreezbeById(freezbe.id, localStorage.getItem('access_token')).subscribe((data : any) => {
      console.log(data);
      if (data.status = 200) {
          this.toastr.success("Freezbe supprimé avec succès ! ");
          this.getAllFreezbe();
      }
    },
    (error : any) => {
      this.toastr.error(error.message);
    });
  }
}
