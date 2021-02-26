<template>
    <div>
      <layout>
        <div class="container-dashboard-center">
          <community />
          <sponsor-views/>
          <div class="">
            <h3 class="is-size-5 mt-4 has-text-weight-semibold	has-text-centered mb-2">Preperate lo bueno esta por venir</h3>
            <Counter></Counter>
          </div>
       </div>
      </layout>
    </div>
</template>
<script>
import Layout from "@/components/layouts/Layout";
import Community from '@/components/Community/index';
import Counter from '@/components/Counter';
import SponsorViews from '@/views/Sponsor.vue'
export default {
  name:"Dashboard",
  components:{
    Layout,
    Community,
    SponsorViews,
    Counter
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