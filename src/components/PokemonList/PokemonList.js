import React from 'react'

import { css } from '@emotion/css'
import './PokemonList.scss'


export default function PokemonList() {
  return (
    <main>
      <div className="pokemon-list">
        <div className="pokemon-list-head">
          <span>Here's all the pokemon!</span>
        </div>
      </div>
    </main>
  )
}
