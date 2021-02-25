<template>
    <div>
      <layout>
        <div class="container-dashboard-center">
          <community />
          <sponsor-views/>
       </div>
      </layout>
    </div>
</template>
<script>
import Layout from "@/components/layouts/Layout";
import Community from '@/components/Community/index';
import SponsorViews from '@/views/Sponsor.vue'
export default {
  name:"Dashboard",
  components:{
    Layout,
    Community,
    SponsorViews
  }
}
</script>
<style lang="scss">
  .container-dashboard-center{
    max-width: 900px;
    margin: auto;
    padding: 0 10px;
  }
</style>