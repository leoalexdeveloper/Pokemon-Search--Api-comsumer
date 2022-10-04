import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonCard } from "./PokemonCard/pokemon-card.component"
import { PokemonList } from "./PokemonList/pokemon-list.component"
import { PokemonModal } from "./PokemonModal/pokemon-modal.component"
import { PokemonService } from "./pokemon.service"
import { ScrollUpButton } from "../ScrollUpButton/scroll-up-button.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations:[
    PokemonCard,
    PokemonList,
    PokemonModal,
    ScrollUpButton
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  providers: [
    PokemonService
  ],
  exports:[

  ]
})

export class PokemonModule{}
