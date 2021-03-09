<template>
  <section class="container is-fluid">
    <container-form>
      
      <form action="" class="">
        <div class="pb-5 pt-4 has-text-centered">
          <p class="is-size-4 px-5">Ingresar</p>
        </div>

        <b-field :type="$v.form.email.$error ? 'is-danger' : ''">
          <b-input
            v-model.trim="$v.form.email.$model"
            placeholder="Correo"
            type="email"
          >
          </b-input>
        </b-field>
        <div>
          <span
            v-if="!$v.form.email.required && $v.form.email.$error"
            class="is-size-7"
            style="color: red"
          >
            El correo es requerido.
          </span>
        </div>
        <br />
        <b-field :type="$v.form.password.$error ? 'is-danger' : ''">
          <b-input
            v-model.trim="$v.form.password.$model"
            placeholder="Contraseña"
            type="password"
          >
          </b-input>
        </b-field>
        <div>
          <span
            v-if="!$v.form.password.required && $v.form.password.$error"
            class="is-size-7 is-block"
            style="color: red"
          >
            La contraseña es requerida.
          </span>
        </div>
        <br />
        <router-link class="level-left" to="/recuperar-password">
          <b>¿Olvidaste tu contraseña?</b></router-link
        >
        <br />
        <button
          @click.prevent="onSubmit"
          type="submit"
          class="button is-dark is-medium is-fullwidth"
        >
          Ingresar
        </button>
        <div class="mt-3">
          No tienes una cuenta, <router-link class="is-size-6" to="/registro"
          >Registrate</router-link
        >
        </div>
      </form>
    </container-form>
  </section>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import ContainerForm from '@/components/Form/ContainerForm'
import AuthService from '@/services/auth.services'
import local from '@/utils/localStorage'
export default {
  name: 'Login',
  components: {
    ContainerForm
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.login()
      }
    },
    async login () {
      try {
        const response = await AuthService.login(this.form)
        local.set('token', response.data.access)
        this.$router.push('dashboard')
      } catch (error) {
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
