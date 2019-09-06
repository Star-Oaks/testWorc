import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';

import { AgmCoreModule } from '@agm/core';
import { TabsModule } from 'ngx-bootstrap';
import { MapCheckerModule } from './map-checker/map-checker.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpService } from './http.service';





export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('2476183045949648')
    }
  ]);
  return config;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    FormsModule,

    SocialLoginModule,
    NoopAnimationsModule,
    

    MatIconModule,
    MatButtonModule,
    TabsModule.forRoot(),

    MatCardModule,

    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDIQ3iCge4n17qWqm8My2GsJwjRzke0G4Y'}),
    MapCheckerModule
  ],
  providers: [
    HttpService,
    {
      provide: AuthServiceConfig,useFactory: getAuthServiceConfigs
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
