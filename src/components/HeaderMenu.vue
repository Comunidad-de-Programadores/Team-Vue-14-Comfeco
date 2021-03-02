<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img
          src="@/assets/logo.png"
          alt="Original logo of the organization comfeco"
        />
      </router-link>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'HeaderMenu',
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_main.scss';
.navbar {
  height: 60px;
  background-color: $purple-light-2 !important;
}
</style>
