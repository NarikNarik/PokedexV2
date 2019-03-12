import React, { Component } from 'react'
import PokemonStore from './PokemonStore'
import { observer } from 'mobx-react'
//import './Pagination.css'
@observer
class Pagination extends Component {
  makePaginationItems = () => {

    let items = []
    for(let i = 0; i < PokemonStore.totalPages; i++){
      items.push(<button
      key={i}onClick={PokemonStore.swapPage}>{i+1}</button>)
    }
    return items
  }
    render(){
      return (
      <div className='qwe'>
      <div className='qqq'>
          <select className='Swaplimit-buttons' value={PokemonStore.limit} onChange={PokemonStore.setItemsPerPage}>
          <option value='5'>100</option>
          <option value='150'>150</option>
          <option value='200'>200</option>
          </select>
        </div>
      <div className='Pagination'>
        <ul className='Container-buttons'>
          {this.makePaginationItems()}
        </ul>

      </div>
      </div>
      )
    }






}
  export default Pagination
