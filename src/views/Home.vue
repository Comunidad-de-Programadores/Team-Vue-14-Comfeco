<template>
  <div class="home">
    <top-bar />
   <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "./Footer.vue";
// import Footer from './Footer.vue'
import TopBar from "./TopBar.vue";

export default {
  name: "Home",
  components: {
    Footer,
    TopBar
  }
};
</script>
