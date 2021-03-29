import {Component, OnInit, Input} from '@angular/core';


@Component({selector: 'Inp', templateUrl: './inp.component.html', styleUrls: ['./inp.component.css']})
export class Inp implements OnInit {


    @Input()IconRight: any;
    @Input()IconLeft: any;
    @Input()theme: any;
    @Input()className: any;
    @Input()size: any;
    @Input()aligntext: any;
    @Input()width: any;
    @Input()children: any;
    @Input()type: any;
    @Input()orientation: any;
    @Input()SearchBtn: any;
    @Input()placeholder: any;
    @Input()Name: any;
    constructor() {}

    ngOnInit(): void {}

}
