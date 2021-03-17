<template>
  <b-navbar class="navbar" role="navigation" aria-label="main navigation">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
              class="pr-5 mr-5"
              src="@/assets/logo.png"
              alt="Lightweight UI components for Vue.js based on Bulma"
            >
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item active href="#">
          Inicio
        </b-navbar-item>
        <b-navbar-item href="#">
          Comunidades
        </b-navbar-item>
        <b-navbar-item href="#">
          Talleres
        </b-navbar-item>
        <b-navbar-item href="#">
          Creadores de contenido
        </b-navbar-item>
      </template>

      <template #end>
        <div class="is-flex p-3">
          <b-icon
            class="is-clickable mt-2"
            icon="bell"
            size="is-small">
          </b-icon>
          <div
            class="ml-3 -perfil is-clickable"
            :class="isActive ? 'p-2' : 'p-1'"
            :style="isActive ? 'height: 6.5rem' : ''"
            @click="isActive = !isActive"
          >
            <div class="is-flex">
              <div class="has-text-centered -img-perfil">
                <p>
                  {{ username.charAt(0).toUpperCase() }}
                </p>
              </div>
              <p class="ml-1">{{ username }}</p>
              <b-icon
                class="mt-1"
                icon="arrow-down-circle"
                size="is-small">
              </b-icon>
            </div>
            <div v-if="isActive" class="mt-3">
              <router-link
                class="is-block"
                style="border-bottom: 1px solid; color: #000"
                :to="{ name: 'Profile' }"
              >
                Mi perfil
              </router-link>
              <p
                style="color: #000; cursor: pointer;"
                @click="logOut"
              >
                Cerrar sesión
              </p>
            </div>
          </div>
        </div>
      </template>
  </b-navbar>
</template>
<script>
export default {
  name: 'HeaderDashboard',
  data() {
    return {
      username: '',
      isActive: false,
    }
  },
  mounted() {
    if (localStorage.getItem('token') !== null) {
      this.username = this.parseJwt()
    }
  },
  methods: {
    parseJwt () {
      const token = localStorage.getItem('token')
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload).username;
    },
    logOut() {
      localStorage.removeItem('token');
      this.$router.push({
        name: 'Login',
      });
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_main.scss";
.navbar {
  height: 60px;
  background-color: $purple-light-2!important;
}
.-perfil {
  border: 1px solid #54484830;
  border-radius: 1rem 0 1rem 1rem;
  background-color: #ffffff3d;
}
.-img-perfil {
  border: 1px solid;
  border-radius: 50%;
  width: 2rem;
  background-color: #be0ede;
  color: #fff;
}
</style>
