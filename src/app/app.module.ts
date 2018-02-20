import { Http, HttpModule } from '@angular/http';
import { SearcherService } from './services/searcher.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    SearcherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
