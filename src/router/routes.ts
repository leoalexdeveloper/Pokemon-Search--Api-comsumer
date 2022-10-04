import { Routes as AngularRoutes } from "@angular/router"
import { HomeComponent } from "../components/Home/home.component"
import { PokemonList } from "../components/PokemonList/pokemon-list.component"

export const Routes: AngularRoutes = [
  { path:"", component: HomeComponent},
  { path:"pokemon-list", component: PokemonList}
]
