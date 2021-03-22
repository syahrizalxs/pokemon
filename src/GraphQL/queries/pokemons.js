import { gql } from '@apollo/client'

export const GET_ALL_POKEMONS = gql`
  query Pokemons ($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
query Pokemon ($name: String!) {
  pokemon (name: $name) {
    abilities {
      ability {
        name
        url
      }
    }
    height
    weight
    name
    stats {
      base_stat
      effort
      stat {
        name
      }
    }
  }
}
`