<template>
  <nav class="submenu">
    <div class="columns is-mobile is-centered">
      <div class="column is-three-quarters">
        <div class="vcenter buttons columns is-centered is-mobile">
          <b-button
            class="column"
            icon-left="account"
            :type="active.value == 'profile' ? 'is-dark' : 'is-light'"
            @click="change('profile')"
          >
            <span>Mi perfil</span>
          </b-button>
          <b-button
            class="column"
            icon-left="shield-star"
            :type="active.value == 'badges' ? 'is-dark' : 'is-light'"
            @click="change('badges')"
          >
            <span>Insignias</span>
          </b-button>
          <b-button
            class="column"
            icon-left="account-group"
            :type="active.value == 'groups' ? 'is-dark' : 'is-light'"
            @click="change('groups')"
          >
            <span>Grupos</span>
          </b-button>
          <b-button
            class="column"
            icon-left="calendar-multiple"
            :type="active.value == 'events' ? 'is-dark' : 'is-light'"
            @click="change('events')"
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
   props: {
    active: {
      type: Object,
    }
  },
  methods: {
    change(value) {
      this.active.value = value
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
