import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { modulesRouting } from './modules.routing';
import { OrganismsModule } from '../organisms/organisms.module';

@NgModule({
  imports: [
    CommonModule,
    modulesRouting,
    OrganismsModule,
  ],
  declarations: [],
})
export class ModulesModule{}
