import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class Modal implements OnInit {

    @Input()title :any;
    @Input()content :any;
    @Input()buttons :any;
    @Input()accept :any;
    @Input()cancel :any;
    @Input()confirm :any;
    @Input()delete :any;
    @Input()caution :any;


  constructor() { }

  ngOnInit(): void {
  }

}
