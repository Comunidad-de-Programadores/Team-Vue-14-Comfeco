<template>
  <div class="home">
    <layout>
      <container-small>
        <recover-password />
      </container-small>
    </layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "@/components/layouts/Layout";
import ContainerSmall from "@/components/ContainerSmall"
import RecoverPassword from '@/components/Form/RecoverPassword'
export default {
  name: "Home",
  components: {
    Layout,
    ContainerSmall,
    RecoverPassword
  }
};
</script>
