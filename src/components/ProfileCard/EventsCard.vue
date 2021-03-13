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
        <img :src="event.img" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title is-4">{{ event.name }}</p>
        <p class="subtitle is-6">{{ event.description }}</p>
        Fecha de inicio:
        <time>{{ getDate(event.event_date) }}</time>
        <br />
      </div>
      <div class="level">
        <a class="level-left" href="#">Más información</a>
        <b-button @click="join" class="level-right" type="is-danger" rounded
          >Participar</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EventsCard',
  props: {
    event: {
      type: Object
    }
  },
  methods: {
    share () {
      this.$buefy.toast.open({
        message: 'Acción de compartir',
        type: 'is-info'
      })
    },
    join () {
      this.$buefy.toast.open({
        message: '¡Enhorabuena! Has quedado registrado para el evento',
        type: 'is-success'
      })
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
