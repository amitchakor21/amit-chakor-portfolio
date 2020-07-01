import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, AfterViewInit {
  logo = '/assets/images/logo.png';
  shand = document.getElementsByClassName('shade') as HTMLCollectionOf<
    HTMLElement
  >;
  shandOut = document.getElementsByClassName('shadeOut') as HTMLCollectionOf<
    HTMLElement
  >;

  imageMap1 = { width: 827, 
                height: 413, 
                x:1,
                y:1,
                maps: [
                    {points:2,alt:"google",coords:[148,251,28,156],href:"www.google.com",shape:'rect'},
                    {points:2,alt:"facebook",coords:[279,158,439,253],href:"www.facebook.com",shape:'rect'},
                    {points:6,alt:"insta",coords:[477,191,475,237,542,236,564,158,524,144,512,187],href:"www.instagram.com",shape:'poly'},
                    {points:4,alt:"insta2",coords:[479,296,478,386,582,386,581,297],href:"www.instagram.com",shape:'poly'}
                ] };

  that=this;

                
  constructor() {
  }



  ngAfterViewInit(): void {

    // this.renderImageMap(this.imageMap1,"firstimage")
    // setTimeout(function(){ that.renderImageMap.bind(this,this.imageMap1,"firstimage")},2000)

  }

  ngOnInit(): void {
      // this.renderImageMap(this.imageMap1,"firstimage")   

    }
  
  @HostListener('window:scroll')
  onScroll() {
    if (scrollY > 200 && scrollY < 250) {
      this.onResize();
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.renderImageMap(this.imageMap1,"firstimage")   
    var maxHeight = 0;
    var max1;
    for (let i = 0; i < 3; i++) {
      maxHeight =
        this.shandOut[i].offsetHeight > maxHeight
          ? this.shandOut[i].offsetHeight
          : maxHeight;
    }
    max1 = maxHeight + 100 + 20 + 15;

    for (let i = 0; i < 3; i++) {
      this.shand[i].style.height = max1 + 'px';
    }

    // console.log(max1);
    max1 = 0;

  }

  onLoad()
  {

    this.renderImageMap(this.imageMap1,"firstimage")   

  }


  renderImageMap(imgMap,id){
    const imgEl= document.getElementById(id)
    let img= document.getElementById("myimage123");
    // console.log(img.clientHeight)
    // console.log(img.clientWidth) 


    let newEl="";
    imgMap.x=img.clientWidth/imgMap.width;    //change tj]his afterwards
    imgMap.y=img.clientHeight/imgMap.height;
    // console.log(imgMap.x)
    // console.log(imgMap.y)
    let text="";

    for(let map of imgMap.maps){
      if(map.shape === "rect")
      {
        text="";
        for(let i=0;i<4;i++){
          if(i%2 == 0){
            text = text + imgMap.x * map.coords[i] ;
          }
          else{
            text = text + imgMap.y * map.coords[i];
          }
          if(i!=3){
            text = text + ',';
          }
        }
        // console.log(text);
        
        newEl = newEl + ` <area alt="${map.maps}" href="${map.href}" coords="${text}" shape="${map.shape}">`
      }
      else if(map.shape === "poly")
      {
        text="";
        for(let i=0;i<(map.points*2);i++){
          if(i%2 == 0){
            text = text + imgMap.x * map.coords[i] ;
          }
          else{
            text = text + imgMap.y * map.coords[i];
          }
          if(i != (map.points*2-1)){
            text = text + ',';
          }
        }
        // console.log(text);
        
        newEl = newEl + ` <area target="" alt="${map.maps}" href="${map.href}" coords="${text}" shape="${map.shape}" style="border:1px red;">`
      }

      else{
        console.log("unable to find shape");
      }

    }
    imgEl.innerHTML=newEl;
  }

}

