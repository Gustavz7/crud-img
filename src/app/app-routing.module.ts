import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { SummaryComponent } from './components/summary/summary.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'edit_photo', component: AddEditComponent },
  { path: 'create_photo', component: AddEditComponent },
  { path: 'summary_photo', component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
