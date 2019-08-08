import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `<div>
  <input [(ngModel)]="name" type="text">
  {{name}}
  </div>`,
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

public name="";

  constructor() { }

  ngOnInit() {
  }

}
