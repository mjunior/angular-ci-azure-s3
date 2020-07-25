import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeoplesListComponent } from './peoples-list/peoples-list.component';
import { PeoplesListService } from './peoples-list/peoples-list.service';
import { PersonItemComponent } from './peoples-list/person-item/person-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    PeoplesListComponent,
    PersonItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule
  ],
  providers: [ PeoplesListService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
