import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `<div><br>
  <input #input type="text">
  <p><button (click)="onClick(input)">Click To display Name</button></p>
   <p> {{name}}</p>
  </div>`,
  styles: []
})
export class Component1Component implements OnInit {

  public name="";

  onClick(input)
  {
   return this.name=input.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
