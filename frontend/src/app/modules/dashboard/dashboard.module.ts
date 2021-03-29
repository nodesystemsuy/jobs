import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
// tslint:disable-next-line:no-implicit-dependencies no-submodule-imports
import { OrganismsModule } from 'src/app/organisms/organisms.module';

@NgModule({
  imports: [CommonModule, DashBoardRouting, OrganismsModule ],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
