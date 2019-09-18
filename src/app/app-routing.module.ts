import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { MyDragDropComponent } from './my-drag-drop/my-drag-drop.component';
import { MatListComponent } from './mat-list/mat-list.component';

const routes: Routes = [
  { path: 'address', component: AddressFormComponent },
  { path: 'drag-drop', component: MyDragDropComponent },
  { path: 'mat-list', component: MatListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
