import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserFormComponent} from '@UI/user-form/user-form/user-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        UserFormComponent
    ],
    exports: [
        UserFormComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class UserFormModule {
}
