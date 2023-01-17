import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ActorSelectorComponent } from './components/actor-selector/actor-selector.component';
import { ActorsListService } from './services/actors-list.service';
import { MoviesDataService } from './services/movies-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, ReactiveFormsModule],
  declarations: [ AppComponent,  MoviesListComponent, ActorSelectorComponent],
  bootstrap:    [ AppComponent ],
  providers: [ActorsListService, MoviesDataService]
})
export class AppModule { }
