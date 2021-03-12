<template>
  <div>
    <header-menu />
    <slot name="submenu"></slot>
    <main class="container">
      <h2 class="is-size-2 has-text-centered my-5">Grupos</h2>
      <div class="columns">
        <div class="column is-one-quarter">
          <left-card />
        </div>
        <div class="column p-2">
          <div class="mb-5 ml-2">
            <group-input />
          </div>
          <div class="columns is-flex-wrap-wrap">
            <div class="column is-4" v-for="n in [1, 2, 3, 4, 5, 6 ]" :key="n">
              <group-card />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import HeaderMenu from '@/components/HeaderMenu'
import Footer from '@/components/Footer'
import GroupCard from '@/components/Groups/GroupCard'
import GroupInput from '@/components/Groups/GroupInput'
import LeftCard from '@/components/Groups/LeftCard'

export default {
  name: 'IndexGroup',
  components: {
    HeaderMenu,
    Footer,
    GroupCard,
    GroupInput,
    LeftCard
  }
}
</script>