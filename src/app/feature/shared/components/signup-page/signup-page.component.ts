import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { StorageService } from '../../../http-services/storage.service';
import { SharedService } from '../../services/shared.service';
import { NotificationService } from '../../../http-services/notification.service';
import { VerifyMobileEmailComponent } from '../verify-mobile-email/verify-mobile-email.component';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  faGoogle = faGoogle;
  faApple = faApple;
  faHeadset = faHeadset;
  signupForm!: FormGroup
  bsModelRef: any
  roleData: any = [
    { value: 1, text: 'Customer' },
    { value: 1, text: 'Admin' }
  ]
  SuperAdminDetail: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private storageService: StorageService,
    private sharedService: SharedService,
    private notificatonService: NotificationService,
    private bsmodalservice: BsModalService,
  ) {

  }

  ngOnInit() {
    this.getUserDetail()
    this.setIntialForm()
  }

  getUserDetail() {
    this.storageService.getItem("superAdmin").subscribe((res: any) => {
      this.SuperAdminDetail = res
    });
  }

  setIntialForm() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required],
      password: ['', Validators.required],
      rePassword: ['', Validators.required],

    })
  }

  submit(formValue: any) {
    let payload = {
      id: 1,
      Superadmin: this.SuperAdminDetail.id,
      first_name: formValue?.firstName,
      last_name: formValue?.lastName,
      email: formValue?.email,
      mobile: formValue?.mobileNo,
      password: formValue?.password,
      re_password: formValue?.rePassword,
      otp: null,
      role: "Customer",
    };
  
    console.log("Payload:", payload);
  
    this.sharedService.userSignup(payload).subscribe({
      next: (res: any) => {
        if (res && res.status == 'success') {
          this.notificatonService.showSuccess("Signup Successful");
          this.verifyMobileEmail();
          this.signupForm.reset();
        } else {          
          this.notificatonService.showError(res?.error?.msg);
        }
      },
      error: (err: any) => {
        console.error("Signup Error:", err);
        this.notificatonService.showError("Signup Failed. Please try again.");
      },
    });
  }
  

  verifyMobileEmail() {
    const initialState: ModalOptions = {
      initialState: {
        title: 'Verify email and mobile',
      },
    };
    this.bsModelRef = this.bsmodalservice.show(
      VerifyMobileEmailComponent,
      Object.assign(initialState, {
        id: "confirmation",
        class: "modal modal-dialog-centered",
      })
    );
  }

  redirectTo() {
    this.router.navigateByUrl('/login')
  }

  cancel() {
    this.signupForm.reset()
  }
}
