<template>
  <div>
    <!-- ----------Profile------------ -->
    <layout v-if="active.value == 'profile'">
      <template v-slot:submenu>
        <submenu :active.sync="active" />
      </template>
      <template v-slot:left-sidebar>
        <p>Lado izquierdo</p>
      </template>
      <profile-box />
      <template v-slot:right-sidebar>
        <p>Lado derecho</p>
      </template>
    </layout>
    <!-- ----------Badges------------ -->
    <layout v-else-if="active.value == 'badges'">
      <template v-slot:submenu>
        <submenu :active.sync="active" />
      </template>
      <div><p>Insignias</p></div>
    </layout>
    <!-- ----------Groups------------ -->
    <layout v-else-if="active.value == 'groups'">
      <template v-slot:submenu>
        <submenu :active.sync="active" />
      </template>
      <div><p>Grupos</p></div>
    </layout>
    <!-- ----------Events------------ -->
    <layout v-else-if="active.value == 'events'">
      <template v-slot:submenu>
        <submenu :active.sync="active" />
      </template>
      <div><p>Eventos</p></div>
    </layout>
  </div>
</template>
<script>
import Layout from '@/components/layouts/LayoutDefaultProfile'
import ProfileBox from '@/components/ProfileBox.vue'
import Submenu from '@/components/Submenu'
export default {
  name: 'Dashboard',
  components: {
    Layout,
    ProfileBox,
    Submenu
  },
  data () {
    return {
      active: {
        value: 'profile'
      }
    }
  }
}
</script>
<style lang="scss">
.container-dashboard-center {
  max-width: 900px;
  margin: auto;
  padding: 0 10px;
}
</style>
