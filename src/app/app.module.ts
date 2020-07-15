import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './components/lists/lists.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AddListComponent } from './components/add-list/add-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    ListItemComponent,
    HeaderComponent,
    AboutComponent,
    AddListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
