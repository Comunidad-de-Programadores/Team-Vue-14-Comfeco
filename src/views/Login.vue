<template>
  <div class="home">
    <layout>
      <login />
    </layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "@/components/layouts/LayoutForm";
import Login from '@/components/Form/Login'
import Logged from '@/middleware/logged'

export default {
  name: "Home",
  components: {
    Layout,
    Login
  },
  mounted() {
    // if (localStorage.getItem('token') !== null) {
    //   this.$router.push({
    //     name: 'Welcome',
    //   });
    // }
    Logged()
  }
};
</script>
