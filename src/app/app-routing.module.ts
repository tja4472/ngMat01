import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressFormComponent } from './address-form/address-form.component';
import { MyDragDropComponent } from './my-drag-drop/my-drag-drop.component';
import { MatListComponent } from './mat-list/mat-list.component';
import { List1Component } from './list1/list1.component';
import { FlexComponent } from './flex/flex.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'address', component: AddressFormComponent },
  { path: 'drag-drop', component: MyDragDropComponent },
  { path: 'mat-list', component: MatListComponent },
  { path: 'list-1', component: List1Component },
  { path: 'flex', component: FlexComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
