<template>
  <div class="home">
    <layout>
      <login />
    </layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "@/components/layouts/Layout";
import Login from '@/components/Form/Login'
export default {
  name: "Home",
  components: {
    Layout,
    Login
  }
};
</script>
