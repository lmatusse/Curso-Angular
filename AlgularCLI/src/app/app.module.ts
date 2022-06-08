import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivaNgifComponent } from './directiva-ngif/directiva-ngif.component';
import { DirectivaNgswitchComponent } from './directiva-ngswitch/directiva-ngswitch.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivaNgifComponent,
    DirectivaNgswitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
