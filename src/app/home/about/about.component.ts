'use strict'

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  img1='/assets/images/frontRight1.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
