import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-app';

  @ViewChild('myLogo') myLogo: any;
  @ViewChild('introduction') introduction: any;
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.myLogo?.nativeElement?.classList?.add('hidden');
        } else {
          this.myLogo?.nativeElement?.classList?.remove('hidden');
        }
      });
    });
    observer.observe(this.introduction.nativeElement);
  }
  
}
