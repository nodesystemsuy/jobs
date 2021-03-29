import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistryRouting } from './registry.routing';
import { RegisterBusinessComponent } from './register-business/register-business.component';
import { RegisterPeopleComponent } from './register-people/register-people.component';
// tslint:disable-next-line:no-implicit-dependencies no-submodule-imports
import { OrganismsModule } from 'src/app/organisms/organisms.module';

@NgModule({
  imports: [CommonModule, RegistryRouting, OrganismsModule ],
  declarations: [RegisterBusinessComponent, RegisterPeopleComponent],
  providers: []
})
export class RegistryModule {}
