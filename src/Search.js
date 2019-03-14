import React, { useState } from 'react'
import Profile from './Profile'
import axios from 'axios'
export default function Search (props) {
  let [profileIsOpen, setProfileIsOpen] = useState(false)
  let [searchValue, changeInputValue] = useState('')
  let [pokemonData, setPokemonData] = useState([])

  const handleSubmit = async event => {
    event.preventDefault()
    const data = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/` + searchValue)
      .then(res => {
        return res.data
      })
      .catch(err => alert('Pokemon does not exist'))
    setPokemonData(data)
    toggleProfile(true)
  }

  const toggleProfile = e => {
    setProfileIsOpen(!profileIsOpen)
  }

  const handleChange = event => {
    changeInputValue(event.target.value)
  }

  return (
    <div>
      <h1>Search...</h1>
      <input type='text' value={searchValue} onChange={handleChange} />
      <button onClick={handleSubmit}>GO!</button>
      {profileIsOpen && (
        <Profile {...pokemonData} toggleProfile={toggleProfile} />
      )}
    </div>
  )
}
