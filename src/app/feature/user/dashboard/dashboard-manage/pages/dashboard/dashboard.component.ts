import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  navigation= [
    {
      name: 'Algo',
      path: 'algo'
    },
    {
      name: 'Investment',
      path: 'investment'
    },
    {
      name: 'Indicator',
      path: 'indicator'
    },
   
  ]

  constructor(private router:Router){

  }

  ngOnInit(){
    this.router.navigateByUrl('/User/dashboard/home');
  }
  
}
