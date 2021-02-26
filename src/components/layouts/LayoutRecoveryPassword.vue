<template>
    <div class="container-general">
      <header-recovery />
      <main class="layout_forms  container">
        <slot></slot>
      </main>
      <Footer />
    </div>
</template>
<script>
import HeaderRecovery from "@/components/HeaderRecovery";
import Footer from "@/components/Footer";
export default {
  name: "LayoutRecovery",
  components: {
    HeaderRecovery,
    Footer,
  }
};
</script>
<style lang="scss" scoped>
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
  // background-color: $purple-light-2 !important;
}
@media only screen and (max-width: 600px) {
  .layout_forms{
    width: 90%;
  }
}
</style>
