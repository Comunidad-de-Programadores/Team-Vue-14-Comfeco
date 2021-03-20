<template>
  <div>
    <header-menu />
    <slot name="submenu"></slot>
    <br />
    <main class="container is-fluid">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
<script>
import HeaderMenu from '@/components/HeaderMenu'
import Footer from '@/components/Footer'
export default {
  name: 'LayoutFullPage',
  components: {
    HeaderMenu,
    Footer
  }
}
</script>