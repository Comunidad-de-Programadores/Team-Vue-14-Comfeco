<template>
  <div class="home">
    <layout>
      <register />
    </layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "@/components/layouts/Layout";
import Register from '@/components/Form/Register'
export default {
  name: "Home",
  components: {
    Layout,
    Register
  }
};
</script>
