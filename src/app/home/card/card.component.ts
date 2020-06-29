import { Component, OnInit, HostListener,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit,AfterContentInit {

  logo = '/assets/images/logo.png';
  amit = `asdalds`;
  shand = document.getElementsByClassName('shade') as HTMLCollectionOf<HTMLElement>;
  shandOut = document.getElementsByClassName('shadeOut') as HTMLCollectionOf<HTMLElement>;

  
  constructor() { }

  ngAfterContentInit():void{
    this.onResize()
  }

  ngOnInit(): void {

    // console.log(this.shand[0].offsetHeight)
    // console.log(this.shand[1].offsetHeight)
    // console.log(this.shand[2].offsetHeight)
    // this.shand[0].s
    
  }
  @HostListener('window:scroll')
  onScroll(){
    if(scrollY>200 && scrollY<250)
    {
      this.onResize()
    }
  }

  @HostListener('window:resize')
  onResize() {
    var maxHeight=0;
    var max1;
    for(let i=0;i<3 ;i++){
      maxHeight= this.shandOut[i].offsetHeight > maxHeight ? this.shandOut[i].offsetHeight : maxHeight;
    }
    max1=maxHeight+100+20+15;

      for(let i=0;i<3 ;i++){
        this.shand[i].style.height= max1+'px';
      }

    // console.log(max1);
    max1=0;
  }

  
}
