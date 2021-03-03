<template>
    <div class="container-general">
      <header-menu />
      <main class="layout_forms  container">
        <slot></slot>
      </main>
      <Footer />
    </div>
</template>
<script>
import HeaderMenu from "@/components/HeaderMenu";
import Footer from "@/components/Footer";
export default {
  name: "Layout",
  components: {
    HeaderMenu,
    Footer,
  }
};
</script>
<style lang="scss">
.container-general{
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
}
.layout_forms {
  margin:100px auto;
  height: auto;
  width: 70%;
}
@media only screen and (max-width: 600px) {
  .layout_forms{
    width: 90%;
  }
}
</style>
