import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { TRListComponent }         from './tr-list.component';
import { KegService }         from './keg.service';

// import { AppComponent }         from './app.component';
// import { AppComponent }         from './app.component';
// import { AppComponent }         from './app.component';

//this is our router import
 import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TRListComponent
  ],
  providers: [ KegService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
