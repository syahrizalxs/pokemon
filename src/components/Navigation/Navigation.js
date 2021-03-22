import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Navigation.scss'

const menus = [
  { name: 'Pokemons', path: '/pokemon' },
  { name: 'My-Catch', path: '/my-catch' }
]

function Navigation() {
  const { pathname } = useLocation()
  
  const isMatch = (path) => {
    return pathname === path
  }

  const isActive = (path) => {
    return isMatch(path) ? 'active-link' : ''
  }

  return (
    <nav className="navigation">
      <ul>
        { menus.map((item, index) => {
          return (
            <li key={index}>
              <Link className={isActive(item.path)} to={item.path}>{item.name}</Link>
            </li>
          )
        }) }
      </ul>
    </nav>
  )
}

export default Navigation
