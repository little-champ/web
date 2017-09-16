import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdGridListModule,
  MdIconModule,
  MdToolbarModule,
  MdTooltipModule,
  MdSidenavModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    MdButtonModule,
    MdGridListModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }