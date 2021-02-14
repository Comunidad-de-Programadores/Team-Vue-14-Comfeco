<template>
  <div class="home">
    <layout>
      <recover-password />
    </layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "@/components/layouts/Layout";
import RecoverPassword from '@/components/Form/RecoverPassword'
export default {
  name: "Home",
  components: {
    Layout,
    RecoverPassword
  }
};
</script>
