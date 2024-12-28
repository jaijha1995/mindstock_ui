import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LoginService } from '../../services/login.service';
import { NotificationService } from '../../../http-services/notification.service';

@Component({
  selector: 'app-verify-mobile-email',
  templateUrl: './verify-mobile-email.component.html',
  styleUrl: './verify-mobile-email.component.css'
})
export class VerifyMobileEmailComponent {
  title: any
  verifyForm: any;
  showMobileOtp:boolean = false
  showEmailOtp:boolean = false
  constructor(
    private bsModalService: BsModalService,
    private fb: FormBuilder,
    private loginService: LoginService,
    private notificatonService: NotificationService,
  ) {

  }

  ngOnInit() {
    this.setInitialForm();
  }

  setInitialForm() {
    this.verifyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otpEmail: ['', Validators.required],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      otpMobile: ['', Validators.required]
    });
  }

  sendOtpEmail(value: any) {
    let payload = {
      email: value
    };
  
    this.loginService.emailotp(payload).subscribe({
      next: (res: any) => {
        console.log("res",res);
        
        // Assuming the API response status is 200, but the actual OTP is in res.otp
        if (res && res.otp) {
          console.log("res",res);
          
          this.showEmailOtp = true;
          this.notificatonService.showSuccess("OTP sent successfully to your email.");
        } else {
          console.log("error",res);
          this.notificatonService.showError("Failed to send OTP. Please try again.");
        }
      },
      error: (err: any) => {
        console.error("Error sending OTP:", err);
        this.notificatonService.showError("Failed to send OTP. Please try again.");
      }
    });
  }
  
  

  sendOtpMobile(formValue:any) {
    let payload = {
      "mobile": formValue?.mobileNo
    }
    this.loginService.mobileOtp(payload).subscribe({
      next: (res: any) => {
        if (res && res.success == true) {
          console.log("res",res);
          
          this.showMobileOtp = true
          this.notificatonService.showSuccess(res?.message);
        } else {        
          console.log("error",res);
            
          this.notificatonService.showError(res?.error?.error);
        }
      },
      error: (err: any) => {
        console.error("Error sending OTP:", err);
        this.notificatonService.showError("Failed to send OTP. Please try again.");
      }
    });
  }

  verifyOtpMobile(formValue:any) {
    let payload = {
      "mobile": formValue?.mobileNo,
      "otp": formValue?.otpMobile
    }
    this.loginService.verifyMobileOtp(payload).subscribe({
      next: (res: any) => {
        if (res) {
          console.log("res",res);
          
          this.showMobileOtp = false
          this.notificatonService.showSuccess("OTP sent successfully to your Mobile.");
        } else {        
          console.log("error",res);
            
          this.notificatonService.showError(res?.error?.error);
        }
      },
      error: (err: any) => {
        console.error("Error sending OTP:", err);
        this.notificatonService.showError("Failed to send OTP. Please try again.");
      }
    });
   }

  verifyOtpEmail(formValue: any) {
    let payload = {
      "email": formValue?.email,
      "otp": formValue?.otpEmail
    }
    this.loginService.verifyemailOtp(payload).subscribe({
      next: (res: any) => {
        if (res) {
          console.log("res",res);
          this.showEmailOtp = false

          this.notificatonService.showSuccess(res?.message);
        } else {        
          console.log("error",res);
            
          this.notificatonService.showError(res?.error?.error);
        }
      },
      error: (err: any) => {
        console.error("Error sending OTP:", err);
        this.notificatonService.showError("Failed to send OTP. Please try again.");
      }
    });
  }

  resendOtpEmail() { }

  resendOtpMobile() { }

  submit() {
    if (this.verifyForm.valid) {
      console.log(this.verifyForm.value);
      // Call API to verify OTPs
    } else {
      console.log('Form is not valid');
    }
  }

  cancel() {
    this.bsModalService.hide();
  }

}
