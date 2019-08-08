import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  public input="";

@Output() public childEvent=new EventEmitter();


  onClick()
  {
    this.childEvent.emit(this.input);
  }
  constructor() { }

  ngOnInit() {
  }

}
