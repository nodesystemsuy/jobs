import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouting } from './home.routing';
import { HomePageComponent } from './home-page.component';
import {RouterModule} from '@angular/router';
// tslint:disable-next-line:no-implicit-dependencies no-submodule-imports
import { OrganismsModule } from 'src/app/organisms/organisms.module';
import { RecoveryComponent } from './recovery/recovery.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, HomeRouting, OrganismsModule, RouterModule ],
  declarations: [HomePageComponent, RecoveryComponent, LoginComponent],
})
export class HomeModule {}
