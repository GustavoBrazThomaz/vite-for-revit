import { gql } from "@apollo/client";

export const GET_POKEMON_DETAIL = 
gql`
    query samplePokeAPIquery($id: Int!) {
        pokemon_v2_pokemon_by_pk(id: $id) {
            name
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
        pokemon_v2_pokemonstats {
          base_stat
          pokemon_v2_stat {
            name
          }
        }
      }
    }
`

