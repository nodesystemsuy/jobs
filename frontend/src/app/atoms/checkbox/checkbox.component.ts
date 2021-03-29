import {Component, OnInit, Input} from '@angular/core';

@Component({selector: 'Checkbox', templateUrl: './checkbox.component.html', styleUrls: ['./checkbox.component.css']})
export class Checkbox implements OnInit {

    @Input()className : any;
    @Input()size : any;
    @Input()theme : any;
    @Input()text : any;

    constructor() {}

    ngOnInit() : void {}

}
