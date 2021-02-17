<template>
  <section class="">
    <container-form>
      
      <div>
        <div class="" v-if="!isSuccess">
          <p class="title is-4 level-left">Reasignar contraseña</p>
          <p class="subtitle is-6 level-left">
            Te enviaremos un correo electrónico con un enlace privado para que
            reasignes tu contraseña.
          </p>
          <form @submit.prevent="submit()">
            <b-field
              label="Email"
              :custom-class="$v.form.email.$error ? 'has-text-danger' : ''"
              :type="{ 'is-danger': $v.form.email.$error }"
              :message="[
                {
                  'Campo requerido':
                    !$v.form.email.required && $v.form.email.$error
                },
                {
                  'Ingrese un email valido':
                    !$v.form.email.email && $v.form.email.$error
                }
              ]"
            >
              <b-input v-model="form.email"></b-input>
            </b-field>
            <div v-if="messageError"  class="mb-2">
              <p  v-for="(err, index) in messageError" class="help is-danger" :key="'err-' + index">
                {{err}}
              </p>
            </div>
            <div class="is-flex is-justify-content-space-between">
              <b-button native-type="submit" type="is-dark" :loading="loading" >
                Enviar enlace 
              </b-button>
              <router-link to="/"><b>Iniciar sesión</b></router-link>
            </div>
          </form>
        </div>
        <div class="" v-else>
          <div class="icon-email">
            <icon-email></icon-email>
          </div>
          <h3>Hola te hemos enviado un correo a : {{form.email}} para que restaures tu contraseña.</h3>
          <div class="is-flex is-justify-content-center	">
            <b-button type="is-dark" tag="router-link" :to="{name: 'Login'}" class="mt-4 mx-auto" >Volver al Login</b-button>
          </div>
        </div>
      </div>
    </container-form>
  </section>
</template>
<script>
import { required, email } from 'vuelidate/lib/validators'
import ContainerForm from '@/components/Form/ContainerForm'
import IconEmail from '@/components/Icon/IconEmail'
import AuthService from '@/services/auth.services'
export default {
  name: 'PasswordRecovery',
  components: {
    ContainerForm,
    IconEmail
  },
  data () {
    return {
      form: {
        email: null
      },
      messageError: '',
      loading: false,
      isSuccess: false
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      }
    }
  },
  methods: {
    async submit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        try {
          this.loading = true
          this.messageError = ''
          const response = await AuthService.recoveryPassword(this.form)
          this.loading = false
          this.isSuccess = true
          console.log(response, 'reponse')
        } catch (error) {
          this.loading = false
          this.messageError = error.response.data.email
          console.log(error)
        }
      }
      
    }
  }
}
</script>
<style lang="css">
  .icon-email{
    width: 60px;
    margin:auto;
  }
</style>