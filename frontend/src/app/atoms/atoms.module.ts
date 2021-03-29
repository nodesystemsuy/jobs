import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Btn } from './btn/btn.component';
import { Inp } from './inp/inp.component';
import { Img } from './img/img.component';
import { Text } from './text/text.component';
import { Checkbox } from './checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarBtn } from './sidebar-btn/sidebar-btn.component';
import { Pag } from './pag/pag.component';
import { Tag } from './tag/tag.component';
import { CardHorizontal } from './card-horizontal/card-horizontal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    Btn,
    Inp,
    Img,
    Text,
    Checkbox,
    SidebarBtn,
    Pag,
    Tag,
    CardHorizontal,
  ],
  exports : [
    Btn,
    Inp,
    Img,
    Text,
    Checkbox,
    SidebarBtn,
    Pag,
    Tag,
    CardHorizontal,
  ]
})

export class AtomsModule {

}
