import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapCheckerRoutingModule } from './map-checker-routing.module';
import { MapComponent } from './map/map.component';
import { TabsModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './login/login.component';
import { MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MapComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MapCheckerRoutingModule,
    TabsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    AgmCoreModule
  ],
  providers: []
})
export class MapCheckerModule { }
