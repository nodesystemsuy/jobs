import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PostulationComponent } from './postulation/postulation.component';
import { PublicationComponent } from './publication/publication.component';
import { ProfileComponent } from './profile/profile.component';
import { InterviewComponent } from './interview/interview.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'publication',
    pathMatch: 'full'
  },
  {
    path: 'postulation',
    component: PostulationComponent,
    data: {breadcrumb: 'postulation'}
  },
  {
    path: 'publication',
    component: PublicationComponent,
    data: {breadcrumb: 'publication'}
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {breadcrumb: 'profile'}
  },
  {
    path: 'interview',
    component: InterviewComponent,
    data: {breadcrumb: 'interview'}
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    data: {breadcrumb: 'edit-profile'}
  }
];

export const personRouting: ModuleWithProviders<any> = RouterModule.forChild(routes);
