import { observable, action } from 'mobx'
import axios from 'axios'

export class PokemonStore {
  @observable pokemons = []
  @observable count = null
  @observable limit = 50
  @observable ofset = 0
  @observable cards = []
  @observable totalPages = 0
  @observable currentPage = 1
  //@observable profileIsOpen = false

  @action
  getData = async () => {
    await axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${this.limit}&offset=${this
          .limit *
          (this.currentPage - 1)}`
      )
      //.then(res => res.json())
      .then(res => {
        let pages = Math.ceil(res.data.count / this.limit)
        this.totalPages = pages
        this.pokemons = res.data.results
        this.count = res.data.count
      })
      .catch(err => console.log(err))
    this.getPokeInfo()
  }

  @action
  getPokeInfo = async () => {
    let promises = this.pokemons.map(item => {
      return axios.get(item.url)
    })
    await Promise.all(promises).then(pokemonData => {
      let cards = pokemonData.map(item => item.data)
      this.cards = cards
      // console.log(this.cards, 'pokemonsQQQQ')
    })
  }

  @action
  swapPage = event => {
    this.currentPage = +event.target.innerHTML
    this.getData()
  }

  @action
  prevPage = () => {
    this.currentPage = this.currentPage - 1
    this.getData()
  }

  @action
  nextPage = () => {
    this.currentPage = this.currentPage + 1
    this.getData()
  }
  @action
  setItemsPerPage = event => {
    this.limit = event.target.value
    this.getData()
  }
}
export default new PokemonStore()
