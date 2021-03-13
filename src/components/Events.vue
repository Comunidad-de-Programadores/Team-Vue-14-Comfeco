<template>
  <div
    class="columns is-multiline is-variable is-1-mobile is-0-tablet is-8-desktop is-8-widescreen is-2-fullhd"
  >
    <!-- ---------------- EMPTY ---------------- -->
    <section
      v-if="!loading && events.length == 0"
      class="section column is-full"
    >
      <div class="content has-text-grey has-text-centered">
        <template>
          <p>
            <b-icon icon="emoticon-sad" size="is-large" />
          </p>
          <p>Aún no hay eventos activos&hellip;</p>
        </template>
      </div>
    </section>
    <!-- ---------------- LOADER ---------------- -->
    <div v-if="loading" class="column is-full">
      <div
        class="columns is-multiline is-variable is-1-mobile is-0-tablet is-8-desktop is-8-widescreen is-2-fullhd"
      >
        <events-card-skeleton
          v-for="id in 3"
          :key="id"
          class="column is-one-third"
        />
      </div>
    </div>
    <!-- ---------------- EVENTS ---------------- -->
    <div
      v-else-if="events.length > 0"
      v-for="(event, id) in events"
      :key="id"
      class="column is-one-third"
    >
      <events-card :event="event" />
    </div>
  </div>
</template>
<script>
import EventsCard from './ProfileCard/EventsCard.vue'
import EventsCardSkeleton from './EventsCardSkeleton.vue'
import CommunityService from '@/services/community.services'
export default {
  name: 'Events',
  components: {
    EventsCard,
    EventsCardSkeleton
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
        const response = await CommunityService.getEvents()
        this.events = response.data
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
