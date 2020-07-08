import { Component, OnInit, AfterViewInit,HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
  
export class HederComponent implements OnInit, AfterViewInit {

    logo = '/assets/images/logo.png';
    lastscroll = 0;
    direction ="up"
    header;
    headerBg;
    transparent=0;
    topPosToStartShowing = 40;
    isShow: boolean;
    scrolledDown: boolean;
    shand = document.getElementsByClassName('frontImage') as HTMLCollectionOf<HTMLElement>;
    ap = document.getElementsByClassName('trial') as HTMLCollectionOf<HTMLElement>;
    scrollPosition: number;
    listitems=<HTMLElement[]><any>document.querySelectorAll('.link-items');
    linkItemsOut=1
    id=0
    timer=null;
    constructor(){
    }
  
    ngAfterViewInit(): void {
      this.header= document.getElementById('header');
      this.header.style.height=`100px`;
      this.listitems=<HTMLElement[]><any>document.querySelectorAll('.link-items');
      this.scrollPosition=0
      this.header = document.getElementById('header');
      this.headerBg = document.getElementById('headerBg');
    }

    ngOnInit(): void {
    }
  
    @HostListener('window:scroll')
    checkScroll() {

      this.transparent=1

      this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      if(this.scrollPosition>300)
        this.linkItemsOut=0
      else 
        this.linkItemsOut=1
  
      if(this.timer){
        clearTimeout(this.timer)
      }

      this.timer = setTimeout(() => {
        this.transparent=0
      }, 300);
      

  
      if(this.scrollPosition<200)
      {      
        this.ShowHeader(1);
        this.lastscroll= this.scrollPosition
        return                              //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      }    
      
      this.checkDir()
  
      // if((this.scrollPosition-this.lastscroll)>-3 && (this.scrollPosition-this.lastscroll)<3){
      //   setTimeout(this.ShowHeader,1500,0)
        
      // }
      if(this.direction === 'up')
        this.ShowHeader(1)
      else
        this.ShowHeader(1)

      this.lastscroll=this.scrollPosition;
  
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
      // console.log("display triggerred " + this.id)
      this.id++;
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
  
