import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'CardHorizontal',
  templateUrl: './card-horizontal.component.html',
  styleUrls: ['./card-horizontal.component.scss']
})
export class CardHorizontal implements OnInit {

    @Input() Img: any;
    @Input() title: any;
    @Input() date: any;
    @Input() description: any;


  constructor() { }

  ngOnInit(): void {
  }

}
