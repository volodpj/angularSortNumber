import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { BtnComponent } from './logic/btn/btn.component';
import { PairedComponent } from './logic/paired/paired.component';
import { OddComponent } from './logic/odd/odd.component';
import { LogicComponent } from './logic/logic.component';


@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    PairedComponent,
    OddComponent,
    LogicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
