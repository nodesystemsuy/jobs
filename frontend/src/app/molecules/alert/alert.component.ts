import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'Alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class Alert implements OnInit {

  @Input() Icon: any;
  @Input() title: any;
  @Input() description: any;

  constructor() { }

  ngOnInit(): void {
  }

}
