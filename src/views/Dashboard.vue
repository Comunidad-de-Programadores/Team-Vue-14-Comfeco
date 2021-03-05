<template>
  <div>
    <layout>
      <template v-slot:left-sidebar>
        <communities-list-card />
        <profile-card />
      </template>
      <community />
      <sponsor-views />
      <div class="">
        <h3
          class="is-size-5 mt-4 has-text-weight-semibold has-text-centered mb-2"
        >
          Preperate lo bueno esta por venir
        </h3>
        <Counter></Counter>
      </div>
      <template v-slot:right-sidebar>
        <workshops-list-card />
      </template>
    </layout>
  </div>
</template>
<script>
import Layout from '@/components/layouts/LayoutDefault'
import Community from '@/components/Community/index'
<<<<<<< HEAD
import SponsorViews from '@/views/Sponsor.vue'
import Counter from '@/components/Counter'
=======
import SponsorViews from '@/components/Sponsor.vue'
import Counter from '@/components/Counter';
>>>>>>> development
import CommunitiesListCard from '@/components/CommunitiesListCard'
import ProfileCard from '@/components/ProfileCard'
import WorkshopsListCard from '@/components/WorkshopsListCard'

export default {
  name: 'Dashboard',
  components: {
    Layout,
    Community,
    SponsorViews,
    Counter,
    CommunitiesListCard,
    ProfileCard,
    WorkshopsListCard,
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