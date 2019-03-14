import React from 'react'
import PokemonStore from './PokemonStore'
import { observer } from 'mobx-react'
import './Pagination.styl'

const Pagination = observer(() => {
  const makePaginationItems = () => {
    let items = []
    for (let i = 0; i < PokemonStore.totalPages; i++) {
      let styleName = 'Pagination-button'
      if (i + 1 === PokemonStore.currentPage) styleName += ' Current-button'
      items.push(
        <button className={styleName} key={i} onClick={PokemonStore.swapPage}>
          {i + 1}
        </button>
      )
    }
    return items
  }
  return (
    <div className='qwe'>
      <div className='qqq'>
        <select
          className='Swaplimit-buttons'
          value={PokemonStore.limit}
          onChange={PokemonStore.setItemsPerPage}
        >
          <option value='50'>50</option>
          <option value='75'>75</option>
          <option value='100'>100</option>
        </select>
      </div>
      <div className='Pagination'>
        <button
          className='Nav button'
          disabled={PokemonStore.currentPage === 1}
          onClick={PokemonStore.prevPage}
        >
          {'<'}
        </button>
        <ul className='Container-buttons'>
          {makePaginationItems()}
          <button
            className='Nav button'
            disabled={PokemonStore.currentPage === PokemonStore.totalPages}
            onClick={PokemonStore.nextPage}
          >
            {'>'}
          </button>
        </ul>
      </div>
    </div>
  )
})
export default Pagination
