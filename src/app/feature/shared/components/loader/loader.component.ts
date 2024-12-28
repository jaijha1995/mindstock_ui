import { Component, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {

  @Input() isLoading: boolean = false;  // Control visibility of the loader
  @Input() width: string = '35px';      // Set default width
  @Input() height: string = '10px';     // Set default height
  @Input() color: string = '#74b9ff'
}
