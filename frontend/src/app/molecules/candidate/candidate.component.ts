import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class Candidate implements OnInit {

  @Input() Nombre : any;
  @Input() Apellido : any;
  @Input() Edad : any;
  @Input() Profesion : any;


  constructor() { }

  ngOnInit(): void {
  }

}
