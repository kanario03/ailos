import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesPageRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SearchComponent } from './search/search.component';
import { TimeLineComponent } from '../shared/time-line/time-line.component';
import { RegisterStatusComponent } from './search/register-status/register-status.component';
import { AccountsComponent } from './search/accounts/accounts.component';


@NgModule({
  declarations: [
    PagesComponent,
    SearchComponent,
    TimeLineComponent,
    RegisterStatusComponent,
    AccountsComponent
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    FormsModule,
    PagesPageRoutingModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class PagesModule {}