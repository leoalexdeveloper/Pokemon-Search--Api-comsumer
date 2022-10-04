import { Component, EventEmitter, Input, Output } from "@angular/core"
import { PokemonResults } from "../../../interfaces/Pokemons.interface"
import { Utils } from "../../../utils/utils.service"
import axios from "axios"

@Component({
  selector: "app-pokemon-card",
  templateUrl: "./pokemon-card.component.html",
  styleUrls: ["./pokemon-card.component.css"]
})
export class PokemonCard {
  @Input() public pokemon:PokemonResults = {name:'', url:''}
  @Output() public emitPokemonId: EventEmitter<number> = new EventEmitter<number>()

  constructor(public Utils: Utils,){}

  getPokemonImagePath(url: string){
    const id = url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
  }

  getPokemonSecondaryImagePath(url: string){
    const id = url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
  }

  getPokemonId(url: string){
    const id = url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")
    return Number(id);
  }

  getPokemonInfo(){
    const id = this.getPokemonId(this.pokemon.url)
    this.emitPokemonId.emit(id)
  }
}
