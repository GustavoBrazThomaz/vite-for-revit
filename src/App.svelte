<script lang="ts">
  import { ApolloClient, InMemoryCache } from "@apollo/client";
  import { setClient } from "svelte-apollo";
	import Home from "./features/home/Home.svelte";

  const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    cache: new InMemoryCache()
  })
  setClient(client)
</script>

<main>
  <Home/>
</main>
