import { Component, OnInit,  HostListener, ElementRef  , AfterViewInit } from '@angular/core';
import { IconsModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { Renderer2, Inject } from '@angular/core';
import { NgbButtonLabel } from '@ng-bootstrap/ng-bootstrap';
import { MinLengthValidator } from '@angular/forms';
// import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  logo = '/assets/images/logo.png';
  front = '/assets/images/frontnight.jpg';
  frontLeft = '/assets/images/frontLeft.jpg';
  frontRight = '/assets/images/frontRight.jpg';
  lastscroll = 0;
  direction ="up"
  header;
  topPosToStartShowing = 40;
  isShow: boolean;
  scrolledDown: boolean;
  shand = document.getElementsByClassName('frontImage') as HTMLCollectionOf<HTMLElement>;
  ap = document.getElementsByClassName('trial') as HTMLCollectionOf<HTMLElement>;
  scrollPosition: number;
  listitems=<HTMLElement[]><any>document.querySelectorAll('.link-items');
  linkItemsOut=1
  constructor(private elementRef: ElementRef){
  }

  ngAfterViewInit(): void {
    this.header= document.getElementById('header');
    this.header.style.height=`100px`;
    this.listitems=<HTMLElement[]><any>document.querySelectorAll('.link-items');
    this.scrollPosition=0
    this.header = document.getElementById('header');
    // this.AdjustHeaderPadding()
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  checkScroll() {
    this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if(this.scrollPosition>300)
      this.linkItemsOut=0
    else 
      this.linkItemsOut=1

    if(this.scrollPosition<300){
      // this.AdjustHeaderPadding()
    }

    if(this.scrollPosition<200)
    {      
      this.ShowHeader(1);
      this.lastscroll= this.scrollPosition
      return                              //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    }    
    
    this.checkDir()

    if(this.direction === 'up')
      this.ShowHeader(1)
    else
      this.ShowHeader(1)

  }

  scroll(str: string){
    const el = document.getElementById(str);
    el.scrollIntoView({behavior:'smooth'})
  }

  checkDir(){
    if((this.lastscroll < this.scrollPosition) && this.direction != "down"){     
      this.direction = "down"
    }
    else if ((this.lastscroll > this.scrollPosition) && this.direction != "up"){
      this.direction = "up"
     }
    this.lastscroll= this.scrollPosition
  }



  ShowHeader(display){
    if(!display)
    {
      this.header.style.visibility = 'hidden';
    }else //if ( && !display) 
    {
      this.header.style.visibility = 'visible';
    }
  }

  AdjustHeaderPadding()
  {
    // const bg=this.scrollPosition*255/300;
    // const bg1= (bg<127)?255:0; 
    if(this.scrollPosition<300)
    {
      
        const padding= 1+ 0.8 - Math.min(0.8,this.scrollPosition/100);
        this.listitems.forEach(element => {
          element.style.padding=`0px ${padding}vw`;
          // element.style.backgroundColor=`rgb(${bg},${bg},${bg})`
          // element.style.color=`rgb(${bg1},${bg1},${bg1})`
        });
      const padding2= 1.5+ 3.5 - Math.min(3.5,this.scrollPosition/(100/3.5));
      this.header.style.padding=`0px ${padding2}vw`;
      
    }


    if(this.scrollPosition>100 && this.scrollPosition<300)
    {
      const height = 60 + 40 - Math.min(40,(this.scrollPosition-100)/2.5);
      this.header.style.height=`${height}px`;
    } 

  }


}


  
  

