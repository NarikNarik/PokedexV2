import React, { useState } from 'react'
import Profile from './Profile'
import './PokeCard.styl'

export default function PokeCard (props) {
  let [profileIsOpen, setProfileIsOpen] = useState(false)

  const toggleProfile = () => {
    setProfileIsOpen(!profileIsOpen)
  }

  return (
    <div className='AllCards'>
      <div className='AllCards-pokemonName'>{props.name}</div>
      ***
      <div className='id'>ID:{props.id}</div>
      <div>
        <img
          className='AllCards-image'
          src={props.sprites.front_default}
          alt={props.name}
        />
      </div>
      <button className='AllCards-button' onClick={toggleProfile}>
        Info...
      </button>
      {profileIsOpen ? (
        <Profile {...props} toggleProfile={toggleProfile} />
      ) : null}
    </div>
  )
}
