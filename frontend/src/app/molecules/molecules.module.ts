import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Publication } from './publication/publication.component';
import { HomeInfoDate } from './home-info-date/home-info-date.component';
import { AtomsModule } from '../atoms/atoms.module';
import { PublicationFilter } from './publication-filter/publication-filter.component';
import { Pagination } from './pagination/pagination.component';
import { SearchBar } from './search-bar/search-bar.component';
import { PublicationCandidates} from './publication-candidates/publication-candidates.component';
import { Candidate } from './candidate/candidate.component';
import { PublicationBusiness } from './publication-business/publication-business.component';
import { MenuBtn } from './menu-btn/menu-btn.component';
import { Alert } from './alert/alert.component';
import { Loader} from './loader/loader.component';
import { PublicationControlers } from './publication-controlers/publication-controlers.component';
import { Modal } from './modal/modal.component';
import { Notify } from './notify/notify.component';
import { SearchFilter } from './search-filter/search-filter.component';


@NgModule({
  imports: [
    CommonModule,
    AtomsModule,
  ],
  declarations: [
    Publication,
    HomeInfoDate,
    PublicationFilter,
    Pagination,
    SearchBar,
    PublicationCandidates,
    Candidate,
    PublicationBusiness,
    MenuBtn,
    Alert,
    Loader,
    PublicationControlers,
    Modal,
    Notify,
    SearchFilter,

  ],
  exports: [
    Publication,
    HomeInfoDate,
    AtomsModule,
    PublicationFilter,
    Pagination,
    SearchBar,
    PublicationCandidates,
    Candidate,
    PublicationBusiness,
    MenuBtn,
    Alert,
    Loader,
    PublicationControlers,
    Modal,
    Notify,
    SearchFilter,

  ],
})

export class MoleculesModule{}
