import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UtilsModule } from './_utils/_utils.module';
import { NavBarComponent } from './features/_nav-bar/nav-bar.component';
import { HomeComponent } from './features/tabs/home/home.component';
import { PageNotFoundComponent } from './features/_page-not-found/page-not-found.component';
import { TabComponent } from './features/tabs/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
    HomeComponent,
    TabComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UtilsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
