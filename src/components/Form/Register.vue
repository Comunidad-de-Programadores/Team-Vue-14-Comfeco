<template>
  <div
    class="container my-4"
  >
    <container-form>
      <form @submit.prevent="onSubmit">
        <div class="pb-5 pt-4 has-text-centered">
          <p class="is-size-4 px-5">Registrate</p>
        </div>

        <div class="mb-3">
          <b-field
            :type="$v.form.username.$error ? 'is-danger' : ''"
            class="mb-0"
          >
            <b-input
              v-model.trim="$v.form.username.$model"
              placeholder="Nombre de usuario"
              type="text"
            >
            </b-input>
          </b-field>
          <div>
            <span
              v-if="!$v.form.username.required && $v.form.username.$error"
              class="is-size-7 is-block"
              style="color: red"
            >
              El nombre de usuario es requerido.
            </span>
            <span
              v-if="!$v.form.username.minLength && $v.form.username.$error"
              class="is-size-7 is-block"
              style="color: red"
            >
              El nombre de usuario debe tener al menos {{$v.form.username.$params.minLength.min}} letras.
            </span>
            <span
              v-if="!$v.form.username.maxLength && $v.form.username.$error"
              class="is-size-7"
              style="color: red"
            >
              El nombre de usuario no debe tener más de {{$v.form.username.$params.maxLength.max}} letras.
            </span>
          </div>      
        </div>

        <div class="mb-3">
          <b-field
            :type="$v.form.email.$error ? 'is-danger' : ''"
            class="mb-0"
          >
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
        </div> 

        <div class="mb-3">
          <b-field
            :type="$v.form.password.$error ? 'is-danger' : ''"
            class="mb-0"
          >
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
          <span
              v-if="!$v.form.password.minLength && $v.form.password.$error"
              class="is-size-7"
              style="color: red"
            >
              La contraseña debe tener al menos {{$v.form.password.$params.minLength.min}} letras.
            </span>
        </div>

        <div class="mb-3">
          <b-field
            :type="$v.form.confirm_password.$error ? 'is-danger' : ''"
            class="mb-0"
          >
            <b-input
              v-model.trim="$v.form.confirm_password.$model"
              placeholder="Confirmar contraseña"
              type="password"
            >
            </b-input>
          </b-field>
          <div>
            <span
              v-if="!$v.form.confirm_password.required && $v.form.confirm_password.$error"
              class="is-size-7"
              style="color: red"
            >
              El confirmar contraseña es requerida.
            </span>
            <span
              v-if="!$v.form.confirm_password.sameAsPassword"
              class="is-size-7 is-block"
              style="color: red"
            >
              Las contraseñas deben ser idénticas.
            </span>
          </div>
        </div>

        <p class="my-5">
          ¿Ya tienes una cuenta?
          <router-link to="/">inicia sesión</router-link>
        </p>

        <button type="submit" class="button is-dark is-medium is-fullwidth">
          Confirmar
        </button>

      </form>
    </container-form>
  </div>
</template>
<script>
import { required, minLength, maxLength, email, sameAs } from 'vuelidate/lib/validators'
import ContainerForm from '@/components/Form/ContainerForm'
export default {
  name: 'Register',
  components:{
    ContainerForm
  },
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: null,
        confirm_password: null
      }
    }
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirm_password: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch()
    }
  }
}
</script>
