import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import PokemonStore from './PokemonStore'


ReactDOM.render(<App store={PokemonStore} />, document.getElementById('root'))



// import React from "react"
// import ReactDOM from "react-dom"
// import TodoStore from "./TodoStore"
// import TodoList from "./TodoList"
//
// const app = document.getElementById("app")
//
// ReactDOM.render(<TodoList store={TodoStore} />, app)
