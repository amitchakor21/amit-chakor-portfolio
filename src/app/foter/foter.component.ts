import { Component, OnInit, AfterViewInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-foter',
  templateUrl: './foter.component.html',
  styleUrls: ['./foter.component.css']
})
  export class FoterComponent implements OnInit, AfterViewInit {

    logo = '/assets/images/logo.png';
    lastscroll = 0;
    direction ="up"
    header;
    topPosToStartShowing = 40;
    
    linkItemsOut=1
    constructor(){
    }
  
    ngAfterViewInit(): void {
      // this.AdjustHeaderPadding()
    }
  
    ngOnInit(): void {
    }
    
  
  
  }
  
