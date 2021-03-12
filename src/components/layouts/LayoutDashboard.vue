<template>
  <div class='container-general'>
    <header-dashboard />
    <section class='section'>
      <main class='container is-clipped mt-4'>
        <div class='columns'>
          <div class='column is-one-quarter'>
            <slot name='left-sidebar'></slot>
          </div>
          <div class='column is-half'>
            <slot></slot>
          </div>
          <div class='column is-one-quarter'>
            <slot name='right-sidebar'></slot>
          </div>
        </div>
      </main>
    </section>
    <Footer />
  </div>
</template>
<script>
import HeaderDashboard from '@/components/HeaderDashboard'
import Footer from '@/components/Footer'

export default {
  name: 'LayoutDashboard',
  components: {
    HeaderDashboard,
    Footer
  }
}
</script>
