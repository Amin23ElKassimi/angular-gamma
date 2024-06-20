import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Child01Component } from './child01/child01.component';
import { Parent01Component } from './parent01/parent01.component';
import { HighlightDirective } from './direttive/highlight.directive';
import { StandardPipesComponent } from './standard-pipes/standard-pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child01Component,
    Parent01Component,
    HighlightDirective,
    StandardPipesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
