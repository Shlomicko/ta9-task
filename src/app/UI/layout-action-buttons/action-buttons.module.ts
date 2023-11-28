import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActionButtonsComponent} from "./action-buttons/action-buttons.component";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    ActionButtonsComponent
  ],
  exports: [
    ActionButtonsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class ActionButtonsModule { }
