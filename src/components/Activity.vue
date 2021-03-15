<template>
  <section>
    <li class="title is-6">Actividad reciente</li>
    <template>
      <activity-card />
    </template>
  </section>
</template>

<script>
import CommunityService from '@/services/community.services'
import ActivityCard from './ActivityCard.vue'
export default {
  name: 'Activity',
  components: {
    ActivityCard
  },
  data () {
    return {
      events: {
        length: 0
      },
      loading: true
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        this.loading = true
        const response = await CommunityService.getUserEvents()
        this.events = response.data
        console.log(this.events)
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
