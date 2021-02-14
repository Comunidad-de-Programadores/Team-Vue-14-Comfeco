<template>

  <section class="container is-fluid">
    <container-form>
      <form action="" class="">
        <b-field>
          <b-input v-model="user.email" placeholder="Correo" type="email" required>
        </b-input>
        </b-field>
        <br />
        <b-field>
          <b-input
            v-model="user.password"
            placeholder="Contraseña"
            type="password"
            required
          >
          </b-input>
        </b-field>
        <br />
        <router-link class="level-left" to="/">
          <b>¿Olvidaste tu contraseña?</b></router-link
        >
        <br />
        <button @click="submit()" class="button is-dark is-medium is-fullwidth">
          Ingresar
        </button>
      </form>
    </container-form>
  </section>
</template>
<script>
import ContainerForm from '@/components/Form/ContainerForm'
export default {
  name: 'Login',
  components: {
    ContainerForm
  },
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      console.log(this.user)
    }
  }
}
</script>
