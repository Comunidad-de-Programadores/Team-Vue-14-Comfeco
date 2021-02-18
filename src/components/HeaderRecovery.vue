<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
          <img
           src="@/assets/logo.png"
           alt="Original logo of the organization comfeco"
           > 
      </router-link>
    </div>
        <div class="navbar-end">
          <div class="item_iniciar_sesion  navbar-item">
                 <a class="button is-light" href="/">
                   Iniciar Sesión
                 </a>
          </div>
       </div>
  </nav>
</template>
<script>
export default {
  name: 'HeaderRecovery'
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_main.scss';
.item_iniciar_sesion {
  position: absolute;
  right: 0;
  top: 2px;
}
.button.is-light {
  background-color: $purple-hard-2 !important;
  color: $yellow-light;
}
.navbar {
  height: 60px;
  background-color: $purple-light-2 !important;
}
</style>
