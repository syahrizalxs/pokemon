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
  query ($name: String!) {
    pokemon (name: $name) {
      abilities {
        ability {
          name
          url
        }
      }
      height
      id
      weight
      name
      moves {
        move {
          name
          url
        }
      }
      types {
        type {
          name
        }
      }
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