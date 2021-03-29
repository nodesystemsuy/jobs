import { AtomsModule } from './../atoms/atoms.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoleculesModule } from '../molecules/molecules.module';
import { Form } from './form/form.component';
import { GuestPublications } from './guest-publications/guest-publications.component';

import { PersonFormLoginComponent } from './person-form-login/person-form-login.component';

import { RouterModule } from '@angular/router';
import { BusinessFormRegisterComponent } from './business-form-register/business-form-register.component';
import { BusinessFormLoginComponent } from './business-form-login/business-form-login.component';
import { BusinessPublications } from './business-publications/business-publications.component';
import { BusinessProfile } from './business-profile/business-profile.component';
import { BusinessEditProfile } from './business-edit-profile/business-edit-profile.component';
import { BusinessMenu } from './business-menu/business-menu.component';
import { BusinessSidebar } from './business-sidebar/business-sidebar.component';
import { BusinessCreateInterview} from './business-create-interview/business-create-interview.component';


import { PasswordRecovery } from './password-recovery/password-recovery.component';
import { PasswordChange } from './password-change/password-change.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../core/servicios/rest/users.rest.service';
import { SessionService } from '../../core/servicios/session.service';



import { Candidates } from './candidates/candidates.component';


import { TemplatesInterviews } from './templates-interviews/templates-interviews.component';
import { Alerts } from './alerts/alerts.component';
import { CreatePost } from './create-post/create-post.component';

import { PersonProfile} from './person-profile/person-profile.component';
import { PersonEditProfile } from './person-edit-profile/person-edit-profile.component';
import { PersonSidebar } from './person-sidebar/person-sidebar.component';
import { PersonPreviewPost } from './person-preview-post/person-preview-post.component';
import { PersonFormRegisterComponent } from './person-form-register/person-form-register.component';
import { PersonMenu } from './person-menu/person-menu.component';

@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    Form,
    GuestPublications,
    PersonFormLoginComponent,
    PersonFormRegisterComponent,
    BusinessFormLoginComponent,
    BusinessFormRegisterComponent,
    PasswordChange,
    PasswordRecovery,
    BusinessSidebar,
    BusinessPublications,
    BusinessProfile,
    BusinessEditProfile,
    BusinessCreateInterview,
    BusinessMenu,
    Candidates,
    PersonPreviewPost,
    TemplatesInterviews,
    Alerts,
    CreatePost,
    PersonProfile,
    PersonEditProfile,
    PersonSidebar,
    PersonMenu,

  ],
  exports: [
    Form,
    GuestPublications,
    PersonFormLoginComponent,
    PersonFormRegisterComponent,
    BusinessFormLoginComponent,
    BusinessFormRegisterComponent,
    BusinessPublications,
    BusinessProfile,
    BusinessEditProfile,
    BusinessSidebar,
   BusinessCreateInterview,
    PasswordChange,
    PasswordRecovery,
    MoleculesModule,
    Candidates,
    PersonPreviewPost,
    BusinessMenu,
    TemplatesInterviews,
    Alerts,
    CreatePost,
    PersonProfile,
    PersonEditProfile,
    PersonSidebar,
    PersonMenu,
  ],
  providers: [UserService, SessionService]
})
export class OrganismsModule {
}
