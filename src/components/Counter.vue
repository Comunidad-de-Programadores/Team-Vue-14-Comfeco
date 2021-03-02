<template>
  <section class="container is-max-widescreen">
    <div class="notification degree has-text-centered has-text-light">
      <div class="columns">
        <div v-for="d in date" :key="d.label" class="has-text-centered column">
          <p class="title1">{{ d.value }}</p>
          <p class="subtitle is-4 has-text-centered">{{ d.label }}</p>
        </div>
      </div>
      <br />
    </div>
  </section>
</template>

<style scoped>
.title1 {
  font-size: 34px;
  font-weight: bold;
}

.degree {
  background: linear-gradient(
    to right,
    rgba(105, 21, 106, 1) 20%,
    rgba(241, 178, 6, 1)
  );
}
</style>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      date: {
        days: {
          value: 0,
          label: 'Días'
        },
        hours: {
          value: 0,
          label: 'Horas'
        },
        minutes: {
          value: 0,
          label: 'Minutos'
        },
        seconds: {
          value: 0,
          label: 'Segundos'
        }
      },
      end: new Date('2/24/2022 7:00 PM'),
      second: 1000,
      minute: 60000,
      hour: 3600000,
      day: 86400000,
      timer: ''
    }
  },
  mounted () {
    this.count()
  },
  methods: {
    count () {
      var now = new Date()
      var distance = this.end - now
      if (distance < 0) {
        clearInterval(this.timer)
        this.date.days.value = 0
        this.date.hours.value = 0
        this.date.minutes.value = 0
        this.date.seconds.value = 0
        return
      }
      this.date.days.value = Math.floor(distance / this.day)
      this.date.hours.value = Math.floor((distance % this.day) / this.hour)
      this.date.minutes.value = Math.floor((distance % this.hour) / this.minute)
      this.date.seconds.value = Math.floor(
        (distance % this.minute) / this.second
      )

      if (this.date.days.value < 10) {
        if (this.date.days.value == 1) this.date.days.label = 'Día'
        else this.date.days.label = 'Días'
        this.date.days.value = '0' + this.date.days.value
      }
      if (this.date.hours.value < 10) {
        if (this.date.hours.value == 1) this.date.hours.label = 'Hora'
        else this.date.hours.label = 'Horas'
        this.date.hours.value = '0' + this.date.hours.value
      }
      if (this.date.minutes.value < 10) {
        if (this.date.minutes.value == 1) this.date.minutes.label = 'Minuto'
        else this.date.minutes.label = 'Minutos'
        this.date.minutes.value = '0' + this.date.minutes.value
      }
      if (this.date.seconds.value < 10) {
        if (this.date.seconds.value == 1) this.date.seconds.label = 'Segundo'
        else this.date.seconds.label = 'Segundos'
        this.date.seconds.value = '0' + this.date.seconds.value
      }

      this.timer = setTimeout(this.count, 1000)
    }
  }
}
</script>
