import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';
import { ToggleSwitchComponent2 } from './toggle-switch-2/toggle-switch-2.component';
import { ToggleSwitchComponent3 } from './toggle-switch-3/toggle-switch-3.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleSwitchComponent,
    ToggleSwitchComponent2,
    ToggleSwitchComponent3,
    SliderComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
