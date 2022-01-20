import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SearchComponent } from './core/components/search/search.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwapyInterceptor } from './core/interceptors/swapy.interceptor';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    NavigationComponent,
  ],
  imports: [FontAwesomeModule, NgbModalModule, HttpClientModule, BrowserModule, AppRoutingModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: SwapyInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
