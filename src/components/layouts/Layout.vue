<template>
    <div>
      <header-menu />
      <main class="layout_forms  container">
        <slot></slot>
      </main>
      <Footer />
    </div>
</template>
<script>
import HeaderMenu from "@/components/HeaderMenu.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Layout",
  components: {
    HeaderMenu,
    Footer,
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_main.scss";
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
