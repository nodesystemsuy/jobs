import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class Notify implements OnInit {

  @Input()theme :any;
   @Input()title :any;
    @Input()content :any;

  constructor() { }

  ngOnInit(): void {
  }

}
