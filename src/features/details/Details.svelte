<script lang="ts">
	import { query } from "svelte-apollo";
	import { GET_POKEMON_DETAIL } from "./graphql/get_pokemon_detail";
	import { useNavigate, useParams } from "svelte-navigator";

	const navigate = useNavigate();
	const params = useParams();
	const { id } = $params;

	const pokemonDetail = query(GET_POKEMON_DETAIL, {
		variables: {
			id: id,
		},
	});

	function handleGoBack() {
		navigate("/");
	}

    

</script>

<div>
	{#if $pokemonDetail.loading}
		<div>Loading</div>
	{:else if $pokemonDetail.error}
		<div>Error</div>
	{:else}
		<button class="p-4" on:click={handleGoBack}>Voltar</button>

		<div class="container flex my-12 mx-auto px-4 md:px-12">
			<div class="flex flex-wrap justify-center -mx-1 lg:-mx-4">
				<div class="max-w-sm m-4 rounded overflow-hidden shadow-lg bg-white">
					<img
						class="w-full"
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
						alt="Sunset in the mountains"
					/>
					<div class="px-6 py-4">
						<div
							class="font-bold text-xl mb-3 text-center border-t-2 border-gray-300 pt-2"
						>
							{$pokemonDetail.data.pokemon_v2_pokemon_by_pk.name}
						</div>
					</div>
				</div>
			</div>
		</div>
    
	{/if}
</div>
