import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `
  <h2>Component-2:{{c2data}}</h2>
  `,
  styles: []
})
export class Component2Component implements OnInit {

  @Input('component1Data') public c2data; 

  constructor() { }

  ngOnInit() {
  }

}
