import './index.styl'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import PokemonStore from './PokemonStore'

ReactDOM.render(<App store={PokemonStore} />, document.getElementById('root'))
