import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { PostItComponent } from './pages/services/post-it/post-it.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    PostItComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
