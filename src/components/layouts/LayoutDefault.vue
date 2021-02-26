<template>
  <div>
    <header-menu />
    <main class="container">
      <div class="columns">
        <div class="column is-one-quarter">
          <slot name="left-sidebar"></slot>
        </div>
        <div class="column is-half">
          <slot></slot>
        </div>
        <div class="column is-one-quarter">
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
  overflow: hidden;
}
</style>
