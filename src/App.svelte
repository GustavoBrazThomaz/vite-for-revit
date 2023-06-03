<script lang="ts">
  import { ApolloClient, InMemoryCache } from "@apollo/client";
  import { setClient } from "svelte-apollo";
  import {Router, Route} from 'svelte-navigator'
	import Home from "./features/home/Home.svelte";
	import Details from "./features/details/Details.svelte";

  const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    cache: new InMemoryCache()
  })
  setClient(client)

  export const url = ""
  
</script>

<main>
  <Router>
    <Route path="/" component="{Home}"/>
    <Route path="/pokemon/:id" component={Details}/>
  </Router>
</main>
