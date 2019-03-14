import React from 'react'
import './Profile.styl'
export default function Profile (props) {
  return (
    <div>
      {props.name && (
        <div className='Profile'>
          <h1 className='Profile-header'>
            {props.name[0].toUpperCase() + props.name.slice(1)}
          </h1>
          <div className='Profile-content'>
            <div className='Image-block'>
              <img
                className='Profile-image'
                src={props.sprites.front_default}
                alt={props.name}
              />
            </div>
            <div className='Profile-info'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Stat</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {props.stats.map((item, id) => {
                    if (!item) {
                      return (
                        <tr>
                          <td>Error...</td>
                        </tr>
                      )
                    }
                    return (
                      <tr key={id}>
                        <td>{item.stat.name}</td>
                        <td>
                          <progress value={item.base_stat} max='170' />
                          <span>{item.base_stat}</span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <button className='Profile-CloseButton' onClick={props.toggleProfile}>
            X
          </button>
        </div>
      )}
    </div>
  )
}
