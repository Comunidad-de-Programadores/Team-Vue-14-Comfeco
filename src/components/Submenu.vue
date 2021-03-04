<template>
  <nav class="submenu">
    <div class="columns is-mobile is-centered">
      <div class="column is-three-quarters">
        <div class="vcenter buttons columns is-centered is-mobile">
          <b-button
            class="column"
            icon-left="account"
            :type="active == 'profile' ? 'is-dark' : 'is-light'"
            @click="active = 'profile'"
          >
            <span>Mi perfil</span>
          </b-button>
          <b-button
            class="column"
            icon-left="shield-star"
            :type="active == 'badges' ? 'is-dark' : 'is-light'"
            @click="active = 'badges'"
          >
            <span>Insignias</span>
          </b-button>
          <b-button
            class="column"
            icon-left="account-group"
            :type="active == 'groups' ? 'is-dark' : 'is-light'"
            @click="active = 'groups'"
          >
            <span>Grupos</span>
          </b-button>
          <b-button
            class="column"
            icon-left="calendar-multiple"
            :type="active == 'events' ? 'is-dark' : 'is-light'"
            @click="active = 'events'"
          >
            <span>Eventos</span>
          </b-button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Submenu',
  data () {
    return {
        active: 'profile'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_main.scss';
.submenu {
  height: 90px;
  background-color: $yellow-hard !important;
}
.vcenter {
  margin-top: 20px;
}

@media only screen and (max-width: 600px) {
  .submenu {
    height: auto;
  }
}
</style>
