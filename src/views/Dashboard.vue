<template>
    <div>
      <layout>
        <div class="container-dashboard-center">
          <community />
       </div>
      </layout>
    </div>
</template>
<script>
import Layout from "@/components/layouts/Layout";
import Community from '@/components/Community/index'
export default {
  name:"Dashboard",
  components:{
    Layout,
    Community
  }
}
</script>
<style lang="scss">
  .container-dashboard-center{
    max-width: 900px;
    margin: auto;
  }
</style>