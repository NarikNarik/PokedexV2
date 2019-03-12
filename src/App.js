import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PokeCard from './PokeCard.js'
import Search from './Search.js'
import Pagination from './Pagination.js'
import './App.css'
import PokemonStore from './PokemonStore'

@observer
class App extends Component  {

 async componentDidMount() {
     await this.props.store.getData()
 }


 render(){
   const { cards } = this.props.store
   return (
     <div className='Main'>

       <Search />
       <Pagination />


     <div className='Main-container'>
        {
          cards && cards.map((item, index) => {
            return <PokeCard {...item} key={index}/>
          })
        }

      </div>

    </div>
   )
 }
}

export default App
