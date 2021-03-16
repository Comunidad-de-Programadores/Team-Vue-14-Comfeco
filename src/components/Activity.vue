<template>
  <section>
    <li class="title is-6">Actividad reciente</li>
    <div v-if="length <= 0">
      <b-notification
        class="is-danger"
        aria-close-label="Close notification"
        :closable="false"
      >
        <div class="columns is-vcentered">
          <div class="column is-11">
            <span class="has-text-light subtitle is-6">
              Aún no estás inscrito en algún evento&hellip;
            </span>
          </div>
          <b-icon
            icon="emoticon-sad-outline"
            size="is-large"
            type="is-light"
          ></b-icon>
        </div>
      </b-notification>
    </div>
    <div
      v-else
      @click="clickEvent(event)"
      v-for="(event, id) in events"
      :key="id"
      class="event"
    >
      <activity-card :event="event.event" />
    </div>
    <b-modal v-model="isCardModalActive" width="800px" scroll="keep">
      <events-card
        :event="event.event"
        :joined="true"
        :joined_at="event.created"
      />
    </b-modal>
  </section>
</template>

<script>
import CommunityService from '@/services/community.services'
import EventsCard from './ProfileCard/EventsCard.vue'
import ActivityCard from './ActivityCard.vue'
export default {
  name: 'Activity',
  components: {
    ActivityCard,
    EventsCard
  },
  data () {
    return {
      events: {},
      length: 0,
      loading: true,
      isCardModalActive: false,
      event: ''
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
        this.length = response.data.length
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    clickEvent (event) {
      this.isCardModalActive = !this.isCardModalActive
      this.event = event
    }
  }
}
</script>
<style lang="scss" scoped>
.event {
  margin-bottom: 10px;
}
.event :hover {
  background: $purple-light-1;
}
</style>
