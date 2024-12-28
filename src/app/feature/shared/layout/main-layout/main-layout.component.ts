import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
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
    
    constructor(private router:Router){}

    ngOnInit(){

    }

    redirectTo(value:any){
      if(value == 'signup'){
        this.router.navigateByUrl('/signup')
      }else if(value == 'login'){
        this.router.navigateByUrl('/login')
      }
    }
}

