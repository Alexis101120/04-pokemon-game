<template>
  <div>
      <h1>¿Quien es ese pokemon?</h1>
       <Picture :pokemonId="100" :showPokemon="true"></Picture>
       <Options :pokemons="pokemonArr"></Options>

  </div>
</template>


<script>
import Picture from '@/components/PokemonPicture.vue'
import Options from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components: {Picture,Options },
   data(){
     return {
       pokemonArr : []
     }
   },
   methods : {
     async mixPokemonArray(){
       this.pokemonArr = await getPokemonOptions()
       console.log(this.pokemonArr)
     }
   },
   mounted() {
     this.mixPokemonArray()
   }
}
</script>
