<template>

  <section class="container is-fluid">
    
    <container-form>
      <div class="pb-5 pt-4 has-text-centered">
          <a class="is-size-6 px-5" style="border-right: 1px solid;" href="/">
            Iniciar sesión
          </a>
          <a class="is-size-6 px-5" href="/registro">Registrate</a>
        </div>
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
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      console.log(this.user)
    }
  }
}
</script>
