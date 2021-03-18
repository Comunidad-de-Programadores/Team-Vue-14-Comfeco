<template>
  <div class="card">
    <div class="card-image">
      <b-button
        @click="share"
        class="share"
        type="is-dark"
        icon-right="share-variant"
      />
      <figure class="image is-16by9">
        <img :src="event.image" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title is-4">{{ event.name }}</p>
        <p class="subtitle is-6">{{ event.description }}</p>
        Fecha de inicio:
        <time>{{ getDate(event.event_date) }}</time>
        <template v-if="joined && joined_at !=''"
          ><br />
          Inscrito el: <time>{{ getShortDate(joined_at) }}</time></template
        >
        <br />
      </div>
      <div class="level">
        <a class="level-left" href="#">Más información</a>
        <b-button
          v-if="!joined"
          @click="join"
          class="level-right"
          type="is-dark"
          rounded
          >Participar</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import CommunityService from '@/services/community.services'
export default {
  name: 'EventsCard',
  props: {
    event: {
      type: Object
    },
    joined: {
      type: Boolean,
      default: false
    },
    joined_at: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    share () {
      this.$buefy.toast.open({
        message: 'Acción de compartir',
        type: 'is-info'
      })
    },
    async join () {
      try {
        this.loading = true
        const response = await CommunityService.addToEvent(this.event.id)
        console.log(response)
        this.joined = true
        this.$buefy.toast.open({
          message: '¡Enhorabuena! Has quedado registrado para el evento',
          type: 'is-success'
        })
      } catch (error) {
        console.log(error)
        this.$buefy.toast.open({
          message: 'Algo salió mal',
          type: 'is-danger'
        })
      } finally {
        this.loading = false
      }
    },
    getDate (my_date) {
      var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        hour12: 'false'
      }
      let date = new Date(my_date)
      let date_format = date.toLocaleString('es-ES', options)
      return date_format
    },
    getShortDate (my_date) {
      var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
      let date = new Date(my_date)
      let date_format = date.toLocaleString('es-ES', options)
      return date_format
    }
  }
}
</script>

<style scoped>
.share {
  position: absolute;
  z-index: 1;
  right: 0px;
}
.card-content {
  background: rgb(240, 240, 240);
}
</style>
