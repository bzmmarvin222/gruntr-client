import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import {MatToolbarModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [MainToolbarComponent],
  exports: [
    MainToolbarComponent
  ]
})
export class CoreModule { }
