import { Injectable } from "@angular/core"
import { Api } from "../../api"
import type { Pokemons, PokemonInfo } from "../../interfaces/Pokemons.interface"

@Injectable()
export class PokemonService{
  //public pokemons:Pokemons | undefined
  public pokemonInfo:PokemonInfo | undefined

  async getAllPokemons(){
    const pokemons = await Api.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    return pokemons
  }

 /*  async getPokemons(perPage: number, offSet:number){
    this.pokemons = await Api.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offSet}`)
  }

  async loadMorePokemons(perPage: number, offSet:number){
    const newPokemons = await Api.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offSet}`)
    this.pokemons && newPokemons && this.pokemons.results.push(...newPokemons.results)
  } */

  async getPokemonInfo(id: number){
    const pokemonInfo = await Api.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    this.pokemonInfo = pokemonInfo
  }
}
