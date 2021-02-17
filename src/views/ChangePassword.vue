<template>
  <div class="home">
    <layout>
      <change-password />
    </layout>
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from "@/components/layouts/Layout";
import ChangePassword from '@/components/Form/ChangePassword'
export default {
  name: "Home",
  components: {
    Layout,
    ChangePassword
  }
};
</script>
