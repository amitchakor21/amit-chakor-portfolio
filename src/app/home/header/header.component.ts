import { Component, OnInit,  HostListener, ElementRef  } from '@angular/core';
import { IconsModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { Renderer2, Inject } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

logo = '/assets/images/logo.png';
front = '/assets/images/frontnight.jpg';
frontLeft = '/assets/images/frontLeft.jpg';
frontRight = '/assets/images/frontRight.jpg';

  topPosToStartShowing = 40;
  isShow: boolean;
  scrolledDown: boolean;
  shand = document.getElementsByClassName('frontImage') as HTMLCollectionOf<HTMLElement>;
  ap = document.getElementsByClassName('trial') as HTMLCollectionOf<HTMLElement>;

  constructor(private elementRef: ElementRef){}

  ngOnInit(): void {
    // const s = this.renderer2.createElement('script');
    // s.type = 'text/javascript';
    // s.src = 'https://path/to/your/script';
    // s.text = ``;
    // this.renderer2.appendChild(this._document.body, s);
    this.ap[0].style.color = 'red';

  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;


    // this.shand[0].style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
    // this.shand[1].style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';


    // this.elementRef.nativeElement.ownerDocument.body.style.transform = '#EDF5E1';
    // console.log('[scroll]', scrollPosition);
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
      this.scrolledDown = true;
      // console.log("threshold crossed");
    } else {
      this.isShow = false;
      this.scrolledDown = false;
    }
  }

  @HostListener('window:resize')
  onResize() {
    const mywidth = window.innerWidth;
    if (mywidth < 768){
      // document.getElementById('horizontal').style.display = 'none';
      // document.getElementById('vertical').style.display = 'block';
    }
    else{
      // document.getElementById('vertical').style.display = 'none';
      // document.getElementById('horizontal').style.display = 'block';
    }
  }

  // scroll(str: string) {
  //  const one = new  DOMParser().parseFromString(str, "text/xml");

  //   el:HTMLElement = 'trial';
  //   el.scrollIntoView({behavior: 'smooth'});
  // }

  scroll(str: string){
    const el = document.getElementById(str);
    el.scrollIntoView({behavior:'smooth'})
  }


}
