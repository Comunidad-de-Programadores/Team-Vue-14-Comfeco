<template>
  <div>
    <layout>
      <template v-slot:left-sidebar>
        <communities-list-card />
      </template>
      <welcome-view />
      <template v-slot:right-sidebar>
        <communities-list-card />
      </template>
    </layout>
  </div>
</template>
<script>
import Layout from '@/components/layouts/LayoutDefault'
import CommunitiesListCard from '@/components/CommunitiesListCard'
import WelcomeView from '@/components/Welcome'

export default {
  name: 'Dashboard',
  components: {
    Layout,
    WelcomeView,
    CommunitiesListCard,
  },
}
</script>
