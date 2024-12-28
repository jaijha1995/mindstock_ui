import { Component } from '@angular/core';
import { SharedService } from './feature/shared/services/shared.service';
import { StorageService } from './feature/http-services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mind-stock';

  constructor(
    private sharedService: SharedService,
    private storageService:StorageService
  ) {}

  ngOnInit() {
    this.getSuperAdminDetails()
  }

  getSuperAdminDetails() {
    this.sharedService.getSuperAdmin().subscribe((res: any) => {
      const superAdmin = res?.body[0]
      this.storageService.setItem("superAdmin", superAdmin)
      localStorage.setItem("superAdmin",JSON.stringify(superAdmin))

    })
  }
}
