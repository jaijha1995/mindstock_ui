import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-algo-header',
  templateUrl: './algo-header.component.html',
  styleUrl: './algo-header.component.css'
})
export class AlgoHeaderComponent {
constructor(private router:Router){}

ngOnInit(){}

redirect(value:any){
  let url = `User/dashboard/home/algo/${value}`
  this.router.navigateByUrl(url)
}
}
