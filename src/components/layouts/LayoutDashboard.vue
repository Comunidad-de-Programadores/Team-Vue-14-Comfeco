<template>
  <div class="container-general">
    <header-dashboard />
    <main class="container">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
<script>
import HeaderDashboard from "@/components/HeaderDashboard";
import Footer from "@/components/Footer";
export default {
  name: "LayoutDashboard",
  components: {
    HeaderDashboard,
    Footer
  }
};
</script>
