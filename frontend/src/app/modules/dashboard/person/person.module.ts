import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from '../../../organisms/organisms.module';
import { personRouting } from './person.routing';
import {PostulationComponent} from './postulation/postulation.component';
import { PublicationComponent } from './publication/publication.component';
import { ProfileComponent } from './profile/profile.component';
import { InterviewComponent } from './interview/interview.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  imports: [CommonModule, personRouting, OrganismsModule],
  declarations: [PostulationComponent, PublicationComponent, ProfileComponent, InterviewComponent, EditProfileComponent]
})
export class PersonModule {}
