import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'amit-chakor-portfolio';
  constructor(private elementRef: ElementRef){
  }
  ngAfterViewInit(){

    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#EDF5E1';
 }

}
