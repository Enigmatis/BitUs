import {ProfileCardComponent} from './user-card.component';
import {CardHeaderComponent} from '../../cards/structure/card-header/card-header.component';
import {NgModule} from '@angular/core';
import {UserInfoComponent} from '../../cards/structure/card-body/user-info/user-info.component';
import {CommonModule} from '@angular/common';
import {CardsStructureModule} from '../../cards/structure/card-structure.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CardsStructureModule],
  providers: [],
  bootstrap: [ProfileCardComponent]
})
export class UserProfileCardModule {
}
