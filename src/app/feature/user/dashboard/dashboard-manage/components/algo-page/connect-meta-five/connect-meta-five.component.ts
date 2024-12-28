import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlgoServiceService } from '../services/algo-service.service';
import { NotificationService } from '../../../../../../http-services/notification.service';
import { LoginMetaDetailComponent } from '../login-meta-detail/login-meta-detail.component';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-connect-meta-five',
  templateUrl: './connect-meta-five.component.html',
  styleUrl: './connect-meta-five.component.css'
})
export class ConnectMetaFiveComponent {
  metaForm!: FormGroup
  bsModelRef: any
  metaDetail: any;

  constructor(
    private fb: FormBuilder,
    private algoService: AlgoServiceService,
    private notificatonService: NotificationService,
    private bsmodalservice: BsModalService,
  ) {

  }

  ngOnInit() {
    this.setInitialForm()
  }

  setInitialForm() {
    this.metaForm = this.fb.group({
      account: ['', [Validators.required]],
      password: ['', Validators.required],
      server: ['', Validators.required],
    });
  }


  submit(formValue: any) {
    let payload = {
      "account_no": Number(formValue?.account),
      "password": formValue?.password,
      "server": formValue?.server
    }

    this.algoService.connectMetaFive(payload).subscribe((res: any) => {
      if (res?.status == "Login successful") {
        this.metaDetail = res?.terminal_info;
        this.metaForm.reset();
        this.openMetaDetailModal()
        this.notificatonService.showSuccess(res?.status);
      } else {
        this.notificatonService.showError("You are Not Loged In");
      }
    })
  }

  openMetaDetailModal() {
    const initialState: ModalOptions = {
      initialState: {
        title: 'Meta Five Detail',
        data:this.metaDetail
    },
    };
    this.bsModelRef = this.bsmodalservice.show(
      LoginMetaDetailComponent,
      Object.assign(initialState, {
        id: "confirmation",
        class: "modal modal-dialog-centered",
      })
    );
  }

  cancel() {
    this.metaForm.reset()
  }

}
