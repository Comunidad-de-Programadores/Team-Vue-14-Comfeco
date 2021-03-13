<template>
  <div class="columns is-multiline is-variable is-1-mobile is-0-tablet is-8-desktop is-8-widescreen is-2-fullhd">
    <div v-for="(event, id) in events" :key="id" class="column is-one-third">
      <events-card :event="event" />
    </div>
  </div>
</template>
<script>
import EventsCard from './ProfileCard/EventsCard.vue'
import CommunityService from '@/services/community.services'
export default {
  name: 'Events',
  components: {
    EventsCard
  },
  data () {
    return {
      events: {}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const response = await CommunityService.getEvents()
        this.events = response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
