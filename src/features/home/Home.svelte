<script lang="ts">
	import { query } from "svelte-apollo";
	import { GET_POKEMON } from "./graphql/get_pokemon";


    const pokemon = query(GET_POKEMON)

    function useUpperCase(string: string) {
    return string[0].toUpperCase() + string.slice(1);
    }


</script>
    
<div>
    {#if $pokemon.loading}
        <div>Loading</div>

    {:else if $pokemon.error}
        <div>Error</div>
    {:else}
    <div class="container flex my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap justify-center -mx-1 lg:-mx-4">
            {#each $pokemon.data.pokemon_v2_pokemon as pokemon}
                    <div class="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
                        <img class="w-full"
                             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                             alt="Sunset in the mountains"/>
                        <div class="px-6 py-4">
                            <div
                                class="font-bold text-xl mb-3 text-center border-t-2 border-gray-300 pt-2">{useUpperCase(pokemon.name)}</div>
                        </div>

                    </div>
           {/each}
        </div>
    </div>
    {/if}
</div>