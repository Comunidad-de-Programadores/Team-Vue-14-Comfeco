<template>
  <section class="layout_forms">
    <container-form>
      <div>
        <div class="" v-if="typeForm === 'notFound'">
          <div class="icon-email">
            <icon-email></icon-email>
          </div>
          <h3>Hola el token no es valido</h3>
          <div class="is-flex is-justify-content-center	">
            <b-button type="is-dark" tag="router-link" :to="{name: 'Login'}" class="mt-4 mx-auto" >Volver al Login</b-button>
          </div>    
        </div>
        <div class="" v-else-if="typeForm == 'changePass'">
          <form @submit.prevent="submit()" action="">
            <b-field
              label="Nueva Contraseña"
              :custom-class="$v.form.password.$error ? 'has-text-danger' : ''"
              :type="{ 'is-danger': $v.form.password.$error }"
              :message="[
                {
                  'Campo requerido':
                    !$v.form.password.required && $v.form.password.$error
                },
                {
                  'Debe tener minimo 8 caracteres':
                    !$v.form.password.minLength && $v.form.password.$error
                }
              ]"
            >
              <b-input v-model="form.password"></b-input>
            </b-field>
            <div v-if="messageError"  class="mb-2">
              <p  v-for="(err, index) in messageError" class="help is-danger" :key="'err-' + index">
                {{err}}
              </p>
            </div>
            <div class="is-flex is-justify-content-space-between">
              <b-button native-type="submit" type="is-dark" :loading="loading" >
                Cambiar
              </b-button>
              <router-link to="/"><b>Iniciar sesión</b></router-link>
            </div>
          </form>
        </div>
        <div class="" v-else-if="typeForm === 'thanks'">
          <div class="icon-email">
            <icon-email></icon-email>
          </div>
          <h3>Se ha cambiado tu password correctamente</h3>
          <div class="is-flex is-justify-content-center	">
            <b-button type="is-dark" tag="router-link" :to="{name: 'Login'}" class="mt-4 mx-auto" >Volver al Login</b-button>
          </div>    
        </div>
      </div>
    </container-form>
  </section>
</template>
<script>
import { required, minLength } from 'vuelidate/lib/validators'
import ContainerForm from '@/components/Form/ContainerForm'
import IconEmail from '@/components/Icon/IconEmail'
import AuthService from '@/services/auth.services'
export default {
  name: 'ChangePassword',
  components: {
    ContainerForm,
    IconEmail
  },
  created () {
    this.token = this.$route.query.token
    this.validateToken()
  },
  data () {
    return {
      form: {
        password: null
      },
      messageError: '',
      loading: false,
      typeForm: '',
      isSuccess: null
    }
  },
  validations: {
    form: {
      password: {
        minLength: minLength(8),
        required
      }
    }
  },
  methods: {
    async validateToken () {
      try {
          if(this.token) {
            await AuthService.validateTokenForPassword(this.token)
            this.loading = false
            this.typeForm = 'changePass'
          } else {
            this.typeForm = 'notFound'
          }
        } catch (error) {
          this.typeForm = 'notFound'
        }
    },
    async submit () {
      console.log('dsadaaaaa')
      this.$v.$touch()
      console.log(this.$v.$invalid, 'dsadsadasd')
      if (!this.$v.$invalid) {
        try {
          this.loading = true
          this.messageError = ''
          const data = {
            token: this.token,
            password: this.form.password
          }
          await AuthService.changePassword(data)
          this.loading = false
          this.typeForm = 'thanks'
        } catch (error) {
          console.log(error)
          this.loading = false
          this.messageError = error.response.data.password
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