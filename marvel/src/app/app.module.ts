import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComicsComponent } from './components/add-comics/add-comics.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AddComicsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
