import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  frozen = ['incredibles','tinker','elastic girl'];
  climate = 'blue';
 
  constructor() { }

  ngOnInit() {
	 console.log("test");
  }

}
