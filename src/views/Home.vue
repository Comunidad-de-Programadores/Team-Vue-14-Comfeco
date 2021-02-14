<template>
  <div class="home">
   <layout />
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "/src/components/layouts/Layout.vue";

export default {
  name: "Home",
  components: {
    Layout
  }
};
</script>
