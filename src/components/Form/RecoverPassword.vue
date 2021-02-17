<template>
  <section class="">
    <container-form>
      <p class="title is-4 level-left">Reasignar contraseña</p>
      <p class="subtitle is-6 level-left">
        Te enviaremos un correo electrónico con un enlace privado para que
        reasignes tu contraseña.
      </p>
      <div>
        <form action="" >
          <b-field>
            <b-input v-model="form.email" placeholder="Correo electrónico" type="email"  >
            </b-input>
          </b-field>
          <div v-if="messageError"  class="mb-2">
             <p  v-for="(err, index) in messageError" class="help is-danger" :key="'err-' + index">
              {{err}}
            </p>
          </div>
          <div class="is-flex is-justify-content-space-between">
            <button class="button is-dark" @click.prevent="submit()">
              Enviar enlace 
            </button>
            <router-link to="/"><b>Iniciar sesión</b></router-link>
          </div>
        </form>
      </div>
    </container-form>
  </section>
</template>
<script>
import ContainerForm from '@/components/Form/ContainerForm'
import AuthService from '@/services/auth.services'
export default {
  name: 'PasswordRecovery',
  components: {
    ContainerForm
  },
  data () {
    return {
      form: {
        email: null
      },
      messageError: ''
    }
  },
  methods: {
    async submit () {
      try {
        console.log(AuthService, 'AuthService')
        const response = await AuthService.recoveryPassword(this.form)
        console.log(response, 'reponse')
      } catch (error) {
        this.messageError = error.response.data.email
        console.log(error)
      }
    }
  }
}
</script>