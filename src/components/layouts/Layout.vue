<template>
    <div>
      <header>
        <top-bar />
      </header>
      <main class="layout_forms  container">
        <slot></slot>
      </main>
      <Footer />
    </div>
</template>
<script>
import TopBar from "@/components/TopBar/TopBar.vue";
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "Layout",
  components: {
    TopBar,
    Footer,
  }
};
</script>
<style lang="scss" scoped>
@import "./src/styles/main.scss";
.layout_forms {
  margin:100px auto;
  height: auto;
  width: 70%;
  // background-color: $purple-light-2 !important;
}
@media only screen and (max-width: 600px) {
  .layout_forms{
    width: 90%;
  }
}
</style>
