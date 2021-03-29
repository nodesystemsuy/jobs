import {Component, OnInit, Input} from '@angular/core';

@Component({selector: 'Img', templateUrl: './img.component.html', styleUrls: ['./img.component.css']})
export class Img implements OnInit {

    @Input()srcImg: any;
    @Input()className: any;
    @Input()children: any;

    constructor() {}

    ngOnInit(): void {}

}
