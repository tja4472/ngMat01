import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { MyDragDropComponent } from './my-drag-drop/my-drag-drop.component';

const routes: Routes = [
  { path: 'address', component: AddressFormComponent },
  { path: 'drag-drop', component: MyDragDropComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
