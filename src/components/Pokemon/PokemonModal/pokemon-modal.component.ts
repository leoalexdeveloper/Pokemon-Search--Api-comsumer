import { Component, EventEmitter, Input, Output } from "@angular/core"
import { PokemonInfo } from "../../../interfaces/Pokemons.interface"
import { Utils } from "../../../utils/utils.service"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: "app-pokemon-modal",
  templateUrl: "./pokemon-modal.component.html",
  styleUrls: ["./pokemon-modal.component.css"]
})
export class PokemonModal {
  faXmark = faXmark
  @Input() public pokemonInfo:PokemonInfo | undefined
  @Output() public closeModal: EventEmitter<boolean> = new EventEmitter()

  constructor(public Utils:Utils){

  }

  handlePoekmonImage(image: string){
    return (image) ? image : "../../assets/img/logo/logo.png"
  }

  handleCloseModal(){
    this.closeModal.emit()
  }
}
