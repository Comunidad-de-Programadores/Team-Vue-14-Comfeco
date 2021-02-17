<template>
  <section class="container is-fluid">
    <container-form>
      <div class="pb-5 pt-4 has-text-centered">
        <a class="is-size-6 px-5" style="border-right: 1px solid;" href="/">
          Iniciar sesión
        </a>
        <router-link class="is-size-6 px-5" to="/registro">Registrate</router-link>
      </div>
      <form action="" class="">
        <b-field>
          <b-input
            v-model="user.email"
            placeholder="Correo"
            type="email"
            required
          >
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
        <router-link class="level-left" to="/recuperar-password">
          <b>¿Olvidaste tu contraseña?</b></router-link
        >
        <ul class="mt-2 mb-2">
          <li class="mb-1">
            <a href="/terminos-y-condiciones" class="helper ">Términos y Condiciones</a>
          </li>
          <li class="mb-1">
            <a href="/proteccion-de-datos" class="helper">Protección de datos</a>
          </li>
          <li class="mb-1">
            <a href="/politica-de-privacidad" class="helper ">Politica de privacidad</a>
          </li>
        </ul>
        <button
          @click.prevent="submit"
          class="button is-dark is-medium is-fullwidth"
        >
          Ingresar
        </button>
      </form>
    </container-form>
  </section>
</template>
<script>
import ContainerForm from '@/components/Form/ContainerForm'
import AuthService from '@/services/auth.services'
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
    async submit () {
      try {
        console.log(AuthService, 'AuthService')
        const response = await AuthService.login(this.user)
        console.log(response, 'reponse')
        this.$router.push('dashboard')
      } catch (error) {
        console.log(error)
        this.$buefy.snackbar.open({
          duration: 5000,
          message: 'Las credenciales no coinciden con una cuenta activa',
          type: 'is-danger',
          position: 'is-bottom',
          actionText: 'Ok'
        })
      }
    }
  }
}
</script>
