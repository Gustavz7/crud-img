import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { SummaryComponent } from './components/summary/summary.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TestingComponent } from './components/testing/testing.component';

const routes: Routes = [
  { path: 'testing', component: TestingComponent },
  { path: '', component: CardComponent },
  { path: 'edit-photo/:id', component: AddEditComponent },
  { path: 'create-photo', component: AddEditComponent },
  { path: 'summary-photo/:url', component: SummaryComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
