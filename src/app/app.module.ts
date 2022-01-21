import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Angular Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './components/card/card.component';
import { SummaryComponent } from './components/summary/summary.component';
import { MatCardModule } from '@angular/material/card';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TestingComponent } from './components/testing/testing.component';
import { EditComponent } from './components/edit/edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogClose } from '@angular/material/dialog';
import { DeleteDialogComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SummaryComponent,
    AddEditComponent,
    LoaderComponent,
    PageNotFoundComponent,
    TestingComponent,
    EditComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
