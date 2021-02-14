<template>
  <div class="home">
    <layout>
      <container-small>
        <login />
      </container-small>
    </layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "@/components/layouts/Layout";
import ContainerSmall from "@/components/ContainerSmall"
import Login from '@/components/Form/Login'
export default {
  name: "Home",
  components: {
    Layout,
    ContainerSmall,
    Login
  }
};
</script>
