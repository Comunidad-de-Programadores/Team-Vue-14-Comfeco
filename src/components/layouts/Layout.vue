<template>
    <div>
      <header>
        <top-bar />
      </header>
      <main class="layout_forms box">
        <slot>contenedor de forms Iniciar sesion y registro</slot>
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
</template>
<script>
import TopBar from "/src/components/TopBar/TopBar.vue";
import Footer from "/src/components/Footer/Footer.vue";
export default {
  name: "Layout",
  components: {
    TopBar,
    Footer
  }
};
</script>
<style lang="scss" scoped>
@import "./src/styles/main.scss";
.layout_forms {
  margin:100px auto;
  height: auto;
  width: 70%;
  background-color: $purple-light-2 !important;
}
@media only screen and (max-width: 600px) {
  .layout_forms{
    width: 90%;
  }
}
</style>
