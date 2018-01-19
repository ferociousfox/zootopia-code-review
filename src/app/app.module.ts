import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalEditComponent } from './animal-edit/animal-edit.component';
import { AnimalNewComponent } from './animal-new/animal-new.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalEditComponent,
    AnimalNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
