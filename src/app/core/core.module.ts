import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import {MatToolbarModule} from "@angular/material";
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [MainToolbarComponent, SplashScreenComponent],
  exports: [
    MainToolbarComponent,
    SplashScreenComponent
  ]
})
export class CoreModule { }
