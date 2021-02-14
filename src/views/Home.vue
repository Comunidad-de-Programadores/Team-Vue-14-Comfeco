<template>
  <div class="home">
    <layout>
      <container-small>
        Page Login
      </container-small>
    </layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "/src/components/layouts/Layout";
import ContainerSmall from "@/components/ContainerSmall"
export default {
  name: "Home",
  components: {
    Layout,
    ContainerSmall
  }
};
</script>
