<template>
  <div class="">
    <div class="container-small box">
      <section class="container-edit-profile">
        <div class="pb-5 pt-4 has-text-centered">
          <p class="title is-4 level-left">Editar Perfil</p>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Nickname">
              <b-input v-model="user.username"></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Correo">
              <b-input type="email" v-model="user.email">
              </b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Género"  :custom-class="$v.user.gender.$error ? 'has-text-danger' : ''"
              :type="{ 'is-danger': $v.user.gender.$error }"
              :message="[
                {
                  'Campo requeridos':
                    !$v.user.gender.required && $v.user.gender.$error
                }
              ]" >
              <b-input v-model="user.gender"></b-input>
            </b-field>
          </div>
          <div class="column ">
            <b-field label="Fecha de nacimiento" :custom-class="$v.user.birth_day.$error ? 'has-text-danger' : ''"
              :type="{ 'is-danger': $v.user.birth_day.$error }"
              :message="[
                {
                  'Campo requerido':
                    !$v.user.birth_day.required && $v.user.birth_day.$error
                }
              ]">
              <b-datepicker :focused-date="date"
                :first-day-of-week="1">
                <b-field>
                    <b-autocomplete
                        open-on-focus
                        readonly
                        v-model="month"
                        :data="months"
                        field="name"
                        @select="selectMonth">
                    </b-autocomplete>
                    <p class="control">
                        <span class="button is-static">{{ date.getFullYear() }}</span>
                    </p>
                </b-field>
              </b-datepicker>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-6">
            <b-field label="País" :custom-class="$v.user.country.$error ? 'has-text-danger' : ''"
              :type="{ 'is-danger': $v.user.country.$error }"
              :message="[
                {
                  'Campo requerido':
                    !$v.user.country.required && $v.user.country.$error
                }
              ]">
              <b-input v-model="user.country"></b-input>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Área de conocimiento" :custom-class="$v.user.biography.$error ? 'has-text-danger' : ''"
              :type="{ 'is-danger': $v.user.biography.$error }"
              :message="[
                {
                  'Campo requerido':
                    !$v.user.biography.required && $v.user.biography.$error
                }
              ]">
              <b-select placeholder="Select a name" v-model="user.biography">
                  <option
                      v-for="(select,index) in inputSelect"
                      :value="select.value"
                      :key="index">
                      {{ select.name }}
                  </option>
              </b-select>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-full">
            <b-field label="Facebook" :custom-class="$v.user.facebook.$error ? 'has-text-danger' : ''"
              :type="{ 'is-danger': $v.user.facebook.$error }"
              :message="[
                {
                  'Campo requerido':
                    !$v.user.facebook.required && $v.user.facebook.$error
                }
              ]">
              <b-input v-model="user.facebook" ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-full">
            <b-field label="Twitter" :custom-class="$v.user.twitter.$error ? 'has-text-danger' : ''"
              :type="{ 'is-danger': $v.user.twitter.$error }"
              :message="[
                {
                  'Campo requerido':
                    !$v.user.twitter.required && $v.user.twitter.$error
                }
              ]">
              <b-input v-model="user.twitter" ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-full">
            <b-field label="Github" :custom-class="$v.user.github.$error ? 'has-text-danger' : ''"
              :type="{ 'is-danger': $v.user.github.$error }"
              :message="[
                {
                  'Campo requerido':
                    !$v.user.github.required && $v.user.github.$error
                }
              ]">
              <b-input v-model="user.github" ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-full">
            <b-field label="Linkedin">
              <b-input v-model="user.linkedin" :custom-class="$v.user.linkedin.$error ? 'has-text-danger' : ''"
              :type="{ 'is-danger': $v.user.linkedin.$error }"
              :message="[
                {
                  'Campo requerido':
                    !$v.user.linkedin.required && $v.user.linkedin.$error
                }
              ]"></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-full">
            <b-field label="Biografía">
              <textarea class="textarea is-medium" v-model="user.biography" name="" id=""  rows="5"></textarea>
            </b-field>
          </div>
        </div>
        <b-button @click.prevent="updateProfile()" native-type="submit" type="is-dark" class="is-fullwidth" :loading="loading" >
          Guardar
        </b-button>
      </section>
    </div>
    <div class="container-small box">
      <section class="container-edit-profile">
        <div class="pb-5 pt-4 has-text-centered">
          <p class="title is-4 level-left">Cambiar Contraseña</p>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Contraseña">
              <b-input value="" type="password" maxlength="30"></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Repetir contraseña">
              <b-input value="" type="password" maxlength="30"></b-input>
            </b-field>
          </div>
          
        </div>
        <button
            @click.prevent="updateProfile()"
            type="submit"
            class="button is-dark is-fullwidth"
          >
          Cambiar
        </button>
      </section>
    </div>
  </div>
</template>
<script>
import { required } from 'vuelidate/lib/validators'
import AuthService from '@/services/auth.services'
export default {
  name: 'FormEditProfile',
  data() {
    return {
      date: new Date(),
      month: null,
      months: [
        { name: 'January', value: 0 },
        { name: 'February', value: 1 },
        { name: 'March', value: 2 },
        { name: 'April', value: 3 },
        { name: 'May', value: 4 },
        { name: 'June', value: 5 },
        { name: 'July', value: 6 },
        { name: 'August', value: 7 },
        { name: 'September', value: 8 },
        { name: 'October', value: 9 },
        { name: 'November', value: 10 },
        { name: 'December', value: 11 }
      ],
      inputSelect: [
        { value:'F', name: 'Frontend'},
        { value:'B', name: 'Backend'},
        { value:'D', name: 'Devops'},
        { value:'V', name: 'Video Gamer Developer'},
        { value:'UIX', name: 'UI/UX'},
        { value:'DB', name: 'Data Base Developer'},
        { value:'CC', name: 'Cloud Computing'} 
      ],
      user: {
        biography: "",
        birth_day: null,
        country: "",
        email: "",
        facebook: "",
        first_name: "",
        gender: "",
        github: "",
        last_name: "",
        linkedin: "",
        twitter: "",
        username: "",
      },
      loading: false
    }
  },
  validations: {
    user: {
      area: {
        required
      },
      birth_day: {
        required
      },
      country: {
        required
      },
      facebook: {
        required
      },
      gender: {
        required
      },
      github: {
        required
      },
      twitter: {
        required
      },
      linkedin: {
        required
      },
      biography: {
        required
      }
    }
  },
  created() {
    this.getProfile()    
  },
  methods: {
    selectMonth(option) {
      if (option) {
        this.date = new Date(this.date)
        this.date.setMonth(option.value)
      }
    },
    async getProfile() {
      try {
        const response = await AuthService.getProfile()
        Object.assign(this.user, response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async updateProfile() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.loading = true
        try {
          const response = await AuthService.updateProfile(this.user)
          console.log(response)
          this.loading = false
        } catch (error) {
          this.loading = false
          console.log(error)
        }
      }
      
    }
  },
  mounted() {
    this.month = this.months.filter(
      item => item.value == this.date.getMonth()
    )[0].name
  }
}
</script>
<style lang="scss" >

.container-edit-profile {
  width: 100%;
}
.container-small {
  max-width: 550px;
  margin: auto;
}
</style>
