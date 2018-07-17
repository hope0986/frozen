import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  topNav = [{name: 'incredibles',url:'/incredibles'},{name: 'tinker',url:'/tinker'},{name: 'elastic girl',url:'#'}];
  ngOnInit() {
  }

}
