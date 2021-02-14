<template>
  <section class="container is-fluid box">
    <p class="title is-4 level-left">Reasignar contraseña</p>
    <p class="subtitle is-6 level-left">
      Te enviaremos un correo electrónico con un enlace privado para que
      reasignes tu contraseña.
    </p>
    <div>
      <form action="">
        <b-field>
          <b-input
            v-model="form.email"
            placeholder="Correo electrónico"
            type="email"
            required
          >
          </b-input>
        </b-field>
        <div class="is-flex is-justify-content-space-between">
          <button type="submit" class="button is-dark" @click="submit()">
            Enviar enlace
          </button>
          <router-link to="/"><b>Iniciar sesión</b></router-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PasswordRecovery',
  data () {
    return {
      form: {
        email: null
      }
    }
  },
  methods: {
    submit () {
      console.log(this.form)
    }
  }
}
</script>