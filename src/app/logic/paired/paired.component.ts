import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paired',
  templateUrl: './paired.component.html',
  styleUrls: ['./paired.component.css']
})
export class PairedComponent implements OnInit {

  @Input() pairendArrBox: number[];

  constructor() { }

  ngOnInit() {
  }

}
