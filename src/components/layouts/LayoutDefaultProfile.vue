<template>
  <div>
    <header-menu />
    <slot name="submenu"></slot>
    <br />
    <main class="container is-clipped mt-4">
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
    Footer
  }
}
</script>
