import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'HomeInfoDate',
  templateUrl: './home-info-date.component.html',
  styleUrls: ['./home-info-date.component.css']
})
export class HomeInfoDate implements OnInit {

    @Input()text : any;
    @Input()Icon :any;
    @Input()theme :any;
    @Input()Time :any;
    @Input()TimeSize :any;
    @Input()className :any;


  constructor() { }

  ngOnInit(): void {
  }

}
