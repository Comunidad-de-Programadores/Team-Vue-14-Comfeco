<template>
  <div>
    <header-menu />
    <slot name="submenu"></slot>
    <main class="container">
      <h2 class="is-size-2 has-text-centered my-5">Grupos</h2>
      <div class="columns">
        <div class="column is-one-quarter">
          <left-card />
        </div>
        <div class="column p-2">
          <div class="mb-5 ml-2">
            <group-input @search="nameGroup" @selected="selectedLanguage" :names="names" />
          </div>
          <div class="columns is-flex-wrap-wrap">
            <div class="column is-4" v-for="group in filteredGroupName" :key="group.id">
              <group-card :group="group" />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import HeaderMenu from '@/components/HeaderDashboard'
import Footer from '@/components/Footer'
import GroupCard from '@/components/Groups/GroupCard'
import GroupInput from '@/components/Groups/GroupInput'
import LeftCard from '@/components/Groups/LeftCard'
import GroupService from '@/services/group.services'

export default {
  name: 'IndexGroup',
  components: {
    HeaderMenu,
    Footer,
    GroupCard,
    GroupInput,
    LeftCard
  },
  data() {
    return {
      groups: [],
      names: [],
      name: '',
      language: ''
    }
  },
  mounted() {
    GroupService.getGroups()
    .then((response) => {
      this.groups = response.data
      this.names = response.data.map((group) => {
        return group.name
      })
    })
    .catch(() => {
      alert('Ha ocurrido un error')
    })
  },
  methods: {
    nameGroup(name) {
      this.name = name
    },
    selectedLanguage(language) {
      this.language = language
    }
  },
  computed: {
    filteredGroupName() {
      return this.groups.filter((group) => {
        return group.name
          .toLowerCase()
          .indexOf(this.name.toLowerCase()) >= 0 
          & group.tag
          .toLowerCase()
          .indexOf(this.language.toLowerCase()) >= 0
      })
    }
  }
}
</script>
