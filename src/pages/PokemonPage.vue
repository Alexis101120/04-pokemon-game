<template>
<h1 v-if="!pokemon">Espere por favor...</h1>
<div v-else>
 <div>
      <h1>¿Quien es ese pokemon?</h1>
       <Picture :pokemonId="pokemon.id" :showPokemon="showPokemon"></Picture>
       <Options :pokemons="pokemonArr" @selection-pokemon="cheackAnswer"></Options>
      <template v-if="showAnswer">
        <h2 class="fade-in">{{message}}</h2>
        <button v-on:Click=newGame>Nuevo juego</button>
      </template>
  </div>
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
       pokemonArr : [],
       pokemon : null,
       showPokemon : false,
       showAnswer: false,
       message :''
     }
   },
   methods : {
     async mixPokemonArray(){
       this.pokemonArr = await getPokemonOptions()
       const rndInt = Math.floor(Math.random() * 4)
       this.pokemon = this.pokemonArr[rndInt]
     },
     cheackAnswer(pokemonId){
       this.showPokemon = true
       if(this.pokemon.id == pokemonId){
          this.message =`Correcto, ${this.pokemon.name}` 
       }else{
         this.message =`Oops, era ${this.pokemon.name}`
       }
       this.showAnswer = true
     },
     async newGame(){
       this.showPokemon = false
       this.showAnswer=false
       this.pokemonArr=[]
       this.pokemon=null
       await this.mixPokemonArray()
     }
   },
   mounted() {
     this.mixPokemonArray()
   }
}
</script>
