<template>
  <div class="home">
    <layout-recovery>
      <recover-password />
    </layout-recovery>
  </div>
</template>

<script>
// @ is an alias to /src
import LayoutRecovery from "@/components/layouts/LayoutRecoveryPassword";
import RecoverPassword from '@/components/Form/RecoverPassword'
export default {
  name: "Home",
  components: {
    LayoutRecovery,
    RecoverPassword
  }
};
</script>
