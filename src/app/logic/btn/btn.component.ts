import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  @Output() btnStatus = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  btnClick(increaset: any){
    this.btnStatus.emit(increaset);
    
  }
}
