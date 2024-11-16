import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BadgeModule,
    InputTextModule,
    ChipModule,
    CardModule,
    AccordionModule,
    FormsModule,
    SidebarModule,
    DividerModule,
    ButtonModule,
    AvatarModule,
    AppRoutingModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
