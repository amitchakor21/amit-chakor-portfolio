import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  images=[
    {img:"/assets/images/first.jpg",
    label:"First Slide",
    text:"First Slide Description about"},
    {img:"/assets/images/second.jpg",
    label:"Second Slide",
    text:"Second Slide Description about"},
    {img:"/assets/images/third.jpg",
    label:"Third Slide",
    text:"Third Slide Description about"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
