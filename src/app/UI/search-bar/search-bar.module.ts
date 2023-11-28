import {NgModule} from '@angular/core';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    SearchBarComponent
  ],
    imports: [
        ReactiveFormsModule,
        MatIconModule
    ],
  exports: [SearchBarComponent]
})
export class SearchBarModule { }
