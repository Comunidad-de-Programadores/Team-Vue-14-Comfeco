<template>
  <div class="">
    <h1 class="is-size-2 has-text-weight-semibold	has-text-centered	mt-6">Bienvenidos a Community Fest and Code</h1>
    <p class="is-size-4 has-text-centered	mt-1">¡Conoce gente, aprende y gana!</p>
    <p class="is-size-6	 mt-5">La próxima adición regresa en el 2022, en la cual se planea involucrar a todos los programadores independiente del area de conocimiento que se encuentre, todo con un mismo proposito, aprender en comunidad</p>
    <community-carrousel></community-carrousel>
    <sponsor-views/>
  </div>
</template>
<script>
import CommunityCarrousel from './CommunityCarrousel'
import SponsorViews from '@/views/Sponsor.vue'
export default {
  name: 'Comunity',
  components: {
    CommunityCarrousel,
    SponsorViews
  }
}
</script>
<style lang="scss">
</style>