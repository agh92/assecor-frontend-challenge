import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwapyInterceptor } from './interceptors/swapy.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    NavigationComponent,
  ],
  imports: [FontAwesomeModule, HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: SwapyInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
