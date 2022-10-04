import { PokemonService } from "../../../components/Pokemon/pokemon.service";
import { Component } from "@angular/core"
import type { Pokemons, PokemonResults, PokemonInfo } from "../../../interfaces/Pokemons.interface"

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"]
})

export class PokemonList{
  emitPokemonId:number = 0

  public pokemons:Pokemons = {
    count:0,
    next:"",
    previous:"",
    results:[]
  }

  public pokemonInfo:PokemonInfo | undefined

  private pokemonOffset: number = 0;
  private pokemonPerPage: number = 20;

  public searchedTerm: string = ''
  public searchedPokemons:PokemonResults[] = []

  constructor(private PokemonService:PokemonService){
    window.onscroll = () => this.handleLoadByScroll()
  }

  async ngOnInit(){
    await this.PokemonService.getAllPokemons()
    this.loadPokemons()
    this.copyToLoadPokemonsToSeachPokemons()
    window.onload = ()=> this.handleLoadByScroll()
  }

  ngDoCheck(){

  }

  loadPokemons(){
    Object.assign(this.pokemons, (this.PokemonService.pokemons))
  }

  copyToLoadPokemonsToSeachPokemons(){
    this.searchedPokemons.push(...this.pokemons.results.slice(this.pokemonOffset, this.pokemonPerPage))
  }

  handleLoadByScroll(){
      if((window.innerHeight + window.pageYOffset + 1) >= document.body.offsetHeight){
        this.pokemonOffset += 20
        this.pokemonPerPage += 20
        this.copyToLoadPokemonsToSeachPokemons()
      }
  }

  handleSearchInput(event: Event){
    this.searchedTerm = (event.target as HTMLInputElement).value.toLowerCase()
    const searchedResults = this.pokemons.results.filter(poke => poke.name.toLowerCase().includes(this.searchedTerm))

    if(this.searchedTerm.length === 0){
        this.searchedPokemons.length = 0
        this.pokemonOffset = 0
        this.pokemonPerPage = 20
        this.copyToLoadPokemonsToSeachPokemons()
        return
    }
    this.searchedPokemons = searchedResults
  }

  handleCloseModal(){
    this.pokemonInfo && delete this.pokemonInfo
    document.body.style.overflowY="auto"
  }

  async openModal(id:number){
    await this.PokemonService.getPokemonInfo(id)
    this.pokemonInfo = this.PokemonService.pokemonInfo
    document.body.style.overflowY="hidden"
  }
}
