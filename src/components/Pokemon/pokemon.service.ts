import { Injectable } from "@angular/core"
import { Api } from "../../api"
import type { Pokemons, PokemonInfo } from "../../interfaces/Pokemons.interface"

@Injectable()
export class PokemonService{

  async getAllPokemons(){
    return await Api.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)

  }

  async getPokemonInfo(id: number){
    return await Api.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

  }
}
