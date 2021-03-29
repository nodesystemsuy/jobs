import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'PublicationCandidates',
  templateUrl: './publication-candidates.component.html',
  styleUrls: ['./publication-candidates.component.css']
})
export class PublicationCandidates implements OnInit {

    @Input() Urg: any;
    @Input() Cargo: any;
    @Input() Monto: any;
    @Input() Moneda: any;
    @Input() children: any;

  constructor() { }

  ngOnInit(): void {
  }

}
