import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from '../../../organisms/organisms.module';
import { businessRouting } from './business.routing';
import { CandidatesComponent } from './candidates/candidates.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PublicationComponent } from './publication/publication.component';
import { PostulationComponent } from './postulation/postulation.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { MyPostComponent } from './my-post/my-post.component';
import { CreateInterviewComponent } from './create-interview/create-interview.component';
import { TemplatesInterviewsComponent } from './templates-interviews/templates-interviews.component';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  imports: [CommonModule, businessRouting, OrganismsModule],
  declarations: [
    CandidatesComponent,
    ProfileComponent,
    EditProfileComponent,
    MyPostComponent,
    PublicationComponent,
    PostulationComponent,
    CreatePostComponent,
    CreateInterviewComponent,
    TemplatesInterviewsComponent,
    AlertsComponent]
})
export class BusinessModule {
}
