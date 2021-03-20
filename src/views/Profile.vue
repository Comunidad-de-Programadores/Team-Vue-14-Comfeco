<template>
  <div>
    <!-- ----------Profile------------ -->
    <layout v-if="active.value == 'profile'">
      <template v-slot:submenu>
        <submenu :active.sync="active" />
      </template>
      <template v-slot:left-sidebar>
        <profile-card />
      </template>
      <profile-box />
      <template v-slot:right-sidebar>
        <community-list-events />
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
    <!-- <layout v-else-if="active.value == 'groups'">
      <template v-slot:submenu>
        <submenu :active.sync="active" />
      </template>
    </layout> -->
    <Group v-else-if="active.value == 'groups'">
      <template v-slot:submenu>
        <submenu :active.sync="active" />
      </template>
    </Group>
    <!-- ----------Events------------ -->
    <layout-full-page-submenu v-else-if="active.value == 'events'">
      <template v-slot:submenu>
        <submenu :active.sync="active" />
      </template>
      <br />
      <div class="container has-text-centered">
        <p class="title is-4">Eventos activos</p>
      </div>
      <br />
      <br />
      <events />
    </layout-full-page-submenu>
  </div>
</template>
<script>
import Layout from '@/components/layouts/LayoutDefaultProfile'
import ProfileBox from '@/components/ProfileBox.vue'
import Submenu from '@/components/Submenu'
import CommunityListEvents from '@/components/CommunitiesListCard/CommunityListEvents'
import Group from '@/components/Groups/Index.vue'
import ProfileCard from '@/components/ProfileCard'
import LayoutFullPageSubmenu from '../components/layouts/LayoutFullPageSubmenu.vue'
import Events from '../components/Events.vue'

export default {
  name: 'Dashboard',
  components: {
    Layout,
    ProfileBox,
    Submenu,
    CommunityListEvents,
    Group,
    ProfileCard,
    LayoutFullPageSubmenu,
    Events
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
