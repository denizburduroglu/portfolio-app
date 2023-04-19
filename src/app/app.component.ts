import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-app';

  @ViewChild('myLogo') myLogo: any;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    // Your scroll event handler here
    // remove class of native element
    this.myLogo.nativeElement.classList.remove('hidden');
  }
  
}
