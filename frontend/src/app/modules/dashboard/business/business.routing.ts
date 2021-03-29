

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
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

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'candidates',
    pathMatch: 'full'
  },
  {
    path: 'candidates',
    component: CandidatesComponent,
    data: { breadcrumb: 'candidates' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { breadcrumb: 'profile' }
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    data: { breadcrumb: 'edit-profile' }
  },
  {
    path: 'publication',
    component: PublicationComponent,
    data: { breadcrumb: 'publication' }
  },
  {
    path: 'postulation',
    component: PostulationComponent,
    data: { breadcrumb: 'postulation' }
  },
  {
    path: 'create-post',
    component: CreatePostComponent,
    data: { breadcrumb: 'create-post' }
  },
  {
    path: 'my-post',
    component: MyPostComponent,
    data: { breadcrumb: 'my-post' }
  },
  {
    path: 'create-interview',
    component: CreateInterviewComponent,
    data: { breadcrumb: 'create-interview' }
  },
  {
    path: 'templates-interviews',
    component: TemplatesInterviewsComponent,
    data: { breadcrumb: 'templates-interviews' }
  },
  {
    path: 'alerts',
    component: AlertsComponent,
    data: { breadcrumb: 'alerts' }
  }
];

export const businessRouting: ModuleWithProviders<any> = RouterModule.forChild(routes);


