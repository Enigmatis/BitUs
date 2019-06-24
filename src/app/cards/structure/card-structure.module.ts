import {CardHeaderComponent} from '../structure/card-header/card-header.component';
import {NgModule} from '@angular/core';
import {UserInfoComponent} from '../structure/card-body/user-info/user-info.component';
import {CommonModule} from '@angular/common';
import {ReposListComponent} from './card-body/repos-list/repos-list.component';

@NgModule({
  declarations: [CardHeaderComponent,
    UserInfoComponent, ReposListComponent],
  imports: [CommonModule],
  exports: [CardHeaderComponent,
    UserInfoComponent, ReposListComponent],
  providers: [],
  bootstrap: []
})
export class CardsStructureModule {
}
