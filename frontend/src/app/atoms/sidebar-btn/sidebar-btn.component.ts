import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'SidebarBtn',
  templateUrl: './sidebar-btn.component.html',
  styleUrls: ['./sidebar-btn.component.scss']
})
export class SidebarBtn implements OnInit {

  @Input() Text: any;
  @Input() Icon: any;
  @Input() Counter: any;
  @Input() CounterColor: any;
  @Input() IconColor: any;

  constructor() { }

  ngOnInit(): void {
  }

}
