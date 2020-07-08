import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-robocon',
  templateUrl: './robocon.component.html',
  styleUrls: ['./robocon.component.css']
})

export class RoboconComponent implements OnInit {

  constructor(    private router:Router,  private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClickButton(){
    // this.router.navigate(['/roboconpage'])
    // this.route.navigate(['/dashboard']);

    // console.log('Redirecting to routers')
  }

}
