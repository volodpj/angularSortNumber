import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.css']
})
export class LogicComponent implements OnInit {

  btnStatusLogic: boolean;

  count: number = 0;
  timer;
  pairedArr: number[] = [];
  oddArr: number[] = [];
 

  constructor() { }

  ngOnInit() {
  }

  btnStatus(eve: boolean){
    this.btnStatusLogic = eve;
    var count = this.count;
    var pairedArr = this.pairedArr;
    var oddArr = this.oddArr;
    if(eve){
      this.timer = setInterval(function(){
        
        count ++;
        
        if((count % 2) == 0){
          pairedArr.push(count);
          
        }else{
          oddArr.push(count);
        }

      },1000)
    }else if(!eve){
      clearInterval(this.timer);
     
    }
  }

 

}
