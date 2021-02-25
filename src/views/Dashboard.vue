<template>
  <div>
    <layout>
      <template v-slot:left-sidebar>
        <communities-list-card />
      </template>
      <community />
      <sponsor-views />
      <template v-slot:right-sidebar>
        <communities-list-card />
      </template>
    </layout>
  </div>
</template>
<script>
import Layout from '@/components/layouts/LayoutDefault'
import Community from '@/components/Community/index'
import SponsorViews from '@/views/Sponsor.vue'
import CommunitiesListCard from '@/components/CommunitiesListCard'
export default {
  name: 'Dashboard',
  components: {
    Layout,
    Community,
    SponsorViews,
    CommunitiesListCard,
  },
}
</script>
<style lang="scss">
.container-dashboard-center {
  max-width: 900px;
  margin: auto;
  padding: 0 10px;
}
</style>