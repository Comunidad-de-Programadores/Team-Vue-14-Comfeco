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
          <img
            style="width: 1rem; cursor: pointer"
            src="@/assets/bell-regular.svg"
          > 
          <div
            class="is-flex ml-3 p-1"
            style="border: 1px solid #54484830; border-radius: 1rem 0 1rem 1rem; background-color: #ffffff3d;"
          >
            <div class="has-text-centered -perfil">
              <p>
                {{ username.charAt(0).toUpperCase() }}
              </p>
            </div>
            <p class="ml-1">{{ username }}</p>
            <img
              class="ml-1 pb-1"
              style="width: 0.7rem; cursor: pointer"
              src="@/assets/caret-down-solid.svg"
            > 
          </div>
        </div>
      </template>
  </b-navbar>
</template>
<script>
export default {
  data() {
    return {
      token: localStorage.getItem('token'),
      username: ''
    }
  },
  mounted() {
    this.username = this.parseJwt()
  },
  methods: {
    parseJwt () {
      var base64Url = this.token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload).username;
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
  border: 1px solid;
  border-radius: 50%;
  width: 2rem;
  background-color: #be0ede;
  color: #fff;
}
</style>
