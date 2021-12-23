<template>
  <div>
      <h1>¿Quien es ese pokemon?</h1>
      <Picture></Picture>
      <Options></Options>
  </div>
</template>


<script>
import Picture from '@/components/PokemonPicture.vue'
import Options from '@/components/PokemonOptions.vue'
export default {
    components: {
    Picture,
    Options
  }
}
</script>
