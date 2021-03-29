import {Component, OnInit, Input} from '@angular/core';

@Component({selector: 'Pagination', templateUrl: './pagination.component.html', styleUrls: ['./pagination.component.css']})
export class Pagination implements OnInit {

    @Input()content : any;
    @Input()theme : any;
    @Input()size : any;
    @Input()align : any;
    @Input()className : any;
    @Input()children : any;
    @Input()btnleft : any;
    @Input()btnright : any;

    constructor() {}

    ngOnInit() : void {}

}
