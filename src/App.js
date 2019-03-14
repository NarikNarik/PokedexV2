import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import PokeCard from './PokeCard.js'
import Search from './Search.js'
import Pagination from './Pagination.js'
import './App.styl'
import PokemonStore from './PokemonStore'

const App = observer(() => {
  useEffect(() => {
    PokemonStore.getData()
  })

  return (
    <div className='Main'>
      <Search />
      <Pagination />

      <div className='Main-container'>
        {PokemonStore.cards &&
          PokemonStore.cards.map((item, index) => {
            return <PokeCard {...item} key={index} />
          })}
      </div>
    </div>
  )
})

export default App
