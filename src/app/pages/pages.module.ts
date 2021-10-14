import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesPageRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    PagesComponent,
    SearchComponent
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