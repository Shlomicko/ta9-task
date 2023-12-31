import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersContainerComponent} from "@UI/users-panel/users-container/users-container.component";

const routes: Routes = [
  {
    path: '',
    component: UsersContainerComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsWindowRoutingModule { }
