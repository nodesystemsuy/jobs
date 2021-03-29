import {Component, OnInit, Input} from '@angular/core';

@Component({selector: 'Btn', templateUrl: './btn.component.html', styleUrls: ['./btn.component.css']})
export class Btn implements OnInit {
    @Input()Icon : any;
    @Input()IconRight : any;
    @Input()text : string;
    @Input()IconLeft : any;
    @Input()theme : any;
    @Input()className : any;
    @Input()size : any;
    @Input()Type : any;

    constructor() {}

    ngOnInit() : void {}
}
