import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navigation = [
    { label: 'Buy Crypto', link: '#' },
    { label: 'Markets', link: '#' },
    { label: 'Trade', link: '#' },
    {
      label: 'Futures',
      link: '#',
      submenu: [
        { label: 'Overview', link: '#' },
        { label: 'Perpetual', link: '#' },
        { label: 'Delivery', link: '#' },
      ],}
    ]
    menuItems: any;
    
    constructor(
      private router:Router,
      private loginService: LoginService
    ){}

    ngOnInit(){
      this.getMenu()
    }

    redirectTo(value:any){
      if(value == 'signup'){
        this.router.navigateByUrl('/signup')
      }else if(value == 'login'){
        this.router.navigateByUrl('/login')
      }
    }

    getMenu(){
      this.loginService.getHeaderMenu().subscribe((res:any)=>{
        console.log("res",res);
        this.menuItems = res?.body?.data
      })
    }
}
