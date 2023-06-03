import { gql } from "@apollo/client";

export const GET_POKEMON =
gql`
    query samplePokeAPIquery {
        pokemon_v2_pokemon(limit: 10) {
            id
            name
            pokemon_v2_pokemontypes {
                pokemon_v2_type {
                    name
                }
            }
        }
    }
`;
