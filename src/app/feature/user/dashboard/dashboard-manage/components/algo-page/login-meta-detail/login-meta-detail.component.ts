import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login-meta-detail',
  templateUrl: './login-meta-detail.component.html',
  styleUrl: './login-meta-detail.component.css'
})
export class LoginMetaDetailComponent {
  title:any
  data:any
  constructor(private bsmodalservice: BsModalService,){}

  ngOnInit(){}

  cancel() {
    this.bsmodalservice.hide();
  }
}
