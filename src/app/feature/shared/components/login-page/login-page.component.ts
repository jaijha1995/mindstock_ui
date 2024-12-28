import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from '../../../http-services/notification.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  faGoogle = faGoogle;
  faApple = faApple;
  faHeadset = faHeadset;
  loginForm!: FormGroup;
  spinnerLoading:boolean = false

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private notificatonService: NotificationService,
    private loginService:LoginService
  ) {

  }

  ngOnInit() {
    this.setInitialForm()
    this.spinnerLoading = true
  }

  setInitialForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  redirectTo() {
    this.router.navigateByUrl('/signup')
  }

  submit(formValue: any) {
    let payload = {
      email: formValue?.email,
      password: formValue?.password,
    };
    
    console.log("payload", payload);
  
    this.loginService.login(payload).subscribe({
      next: (res: any) => {
        console.log("login",res);
        if (res && res.status == 'success') {
          this.router.navigateByUrl('/User/dashboard/home');
          this.notificatonService.showSuccess("Login Successful");
        }else{
          this.notificatonService.showError(res?.msg || "Login Failed");
        }
       
      },
      error: (err: any) => {
        // Handle error and show error notification
        this.notificatonService.showError(err?.message || "Login Failed");
      },
    });
  }
  

  cancel(){
    this.loginForm.reset()
  }
}
