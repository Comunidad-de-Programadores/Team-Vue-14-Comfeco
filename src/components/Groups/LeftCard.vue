<template>
  <div class="card py-2 px-4">
    <div class="p-2 is-flex is-justify-content-space-between">
      <p>Mi grupo</p>
      <router-link to="#">
        Ir al grupo
      </router-link>
    </div>
    <div
      class="p-2 mb-4 is-flex is-justify-content-space-between"
      style="border: 1px solid"
    >
      <p>Crazy Techs</p>
      <p>a</p>
    </div>
    <div
      v-for="n in [1, 2, 3,4]"
      :key="n"
      class="pb-2 mb-4 is-flex is-justify-content-space-between"
      style="border-bottom: 1px solid;"
    >
      <div class="is-flex">
        <div class="-img-perfil-left-card mr-2"></div>
        <div>
          <p class="has-text-weight-bold">Name</p>
          <p class="is-size-7 has-text-greyt">Novato</p>
        </div>
      </div>
      <p class="is-flex is-align-items-center has-text-grey">
        Integrante
      </p>
    </div>
    <b-button class="my-2" expanded rounded>
      Ir al chat
    </b-button>
  </div>
</template>
<script>
export default {
  name: 'LeftCard'
} 
</script>
<style scoped>
.-img-perfil-left-card {
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 1px solid
}
</style>
