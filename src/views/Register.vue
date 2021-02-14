<template>
  <div class="home">
    <layout>
      <container-small>
        <register />
      </container-small>
    </layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "@/components/layouts/Layout";
import ContainerSmall from "@/components/ContainerSmall"
import Register from '@/components/Form/Register'
export default {
  name: "Home",
  components: {
    Layout,
    ContainerSmall,
    Register
  }
};
</script>
