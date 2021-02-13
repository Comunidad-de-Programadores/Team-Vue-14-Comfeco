<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
          <img
           src="../assets/logo.png"
           alt="Original logo of the organization comfeco"
           >    
      </a>
    </div>
  </nav>
</template>
<script>
export default {
  name: "TopBar"
};
</script>
<style lang="scss" scoped>
@import "./src/styles/main.scss";
.navbar {
  height: 60px;
  background-color: $purple-light-2;
}
</style>
