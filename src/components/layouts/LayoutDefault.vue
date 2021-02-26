<template>
  <div>
    <header-menu />
    <main class="container">
      <div class="columns">
        <div class="column is-3 is-12-mobile">
          <slot name="left-sidebar"></slot>
        </div>
        <div class="column is-6 is-12-mobile">
          <slot></slot>
        </div>
        <div class="column is-3 is-12-mobile">
          <slot name="right-sidebar"></slot>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import HeaderMenu from '@/components/HeaderMenu'
import Footer from '@/components/Footer'
export default {
  name: 'Layout',
  components: {
    HeaderMenu,
    Footer,
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_main.scss';
.container {
  margin-top: 10px;
}
</style>
