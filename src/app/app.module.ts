import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { RouterModule } from '@angular/router'

import { Routes } from "../router/routes"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { HomeComponent } from "../components/Home/home.component"
import { PokemonModule } from "../components/Pokemon/pokemon.module"

import { Menu } from "../components/Menu/menu.component"
import { Utils } from "../utils/utils.service"

@NgModule({
  declarations: [
    AppComponent,
    Menu,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    PokemonModule
  ],
  providers: [Utils],
  bootstrap: [AppComponent]
})
export class AppModule { }
