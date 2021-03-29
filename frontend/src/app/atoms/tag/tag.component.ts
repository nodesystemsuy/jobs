import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class Tag implements OnInit {

  @Input() text: any;
  @Input() Icon: any;

  constructor() { }

  ngOnInit(): void {
  }

}
