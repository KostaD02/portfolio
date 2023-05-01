import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent, NotfoundComponent } from './views';
import { AnchorComponent, ButtonComponent, HeaderComponent, LogoComponent, LogoLoadingComponent } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    NotfoundComponent,
    LogoComponent,
    LogoLoadingComponent,
    ButtonComponent,
    AnchorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
