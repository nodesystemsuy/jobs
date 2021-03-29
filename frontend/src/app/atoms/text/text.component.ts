import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class Text implements OnInit {

    @Input()text: any;
    @Input()children: any;
    @Input()className: any;
    @Input()theme: any;
    @Input()size: any;


  constructor() { }

  ngOnInit(): void {
  }

}
