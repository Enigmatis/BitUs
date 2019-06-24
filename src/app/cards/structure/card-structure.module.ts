import {CardHeaderComponent} from '../structure/card-header/card-header.component';
import {NgModule} from '@angular/core';
import {UserInfoComponent} from '../structure/card-body/user-info/user-info.component';
import {CommonModule} from '@angular/common';
import {CardSimpleListComponent} from './card-body/card-simple-list/card-simple-list.component';

@NgModule({
  declarations: [CardHeaderComponent,
    UserInfoComponent, CardSimpleListComponent],
  imports: [CommonModule],
  exports: [CardHeaderComponent,
    UserInfoComponent, CardSimpleListComponent],
  providers: [],
  bootstrap: []
})
export class CardsStructureModule {
}
