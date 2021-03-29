import {Component, OnInit, Input} from '@angular/core';

@Component({selector: 'Pag', templateUrl: './pag.component.html', styleUrls: ['./pag.component.css']})
export class Pag implements OnInit {

    @Input()theme : any;
    @Input()className : any;
    @Input()children : any;

    constructor() {}

    ngOnInit() : void {}

}
