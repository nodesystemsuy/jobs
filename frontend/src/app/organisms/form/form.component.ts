
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class Form implements OnInit {

      @Input()children :any;
      @Input()className :any;
      @Input()theme :any;
      @Input()size :any;


  constructor() {}

  ngOnInit(): void {
  }

}
