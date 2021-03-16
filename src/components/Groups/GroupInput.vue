<template>
  <div class="columns">
    <form @submit.prevent="submit">
      <b-field class="column">
        <b-autocomplete
          v-model="name"
          :data="filteredGroupArray"
          rounded
          placeholder="Bucar grupo"
          icon="magnify"
          clearable
        >
          <template #empty>No se ha encontrado el grupo</template>
        </b-autocomplete>
      </b-field>
    </form>
    <form @change="languageChange()" class="column">
      <b-field >
        <b-select placeholder="Filtrar por lenguaje" expanded rounded v-model="language">
          <option value="tekki">Tekki</option>
          <option value="Python">Python</option>
        </b-select>
      </b-field>
    </form>
  </div>
</template>
<script>
export default {
  name: 'GroupInput',
  props: {
    names: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      language: null,
      name: ''
    }
  },
  methods: {
    submit() {
      this.$emit('search', this.name)
    },
    languageChange() {
      this.$emit('selected', this.language)
    }
  },
  computed: {
    filteredGroupArray() {
      return this.names.filter((name) => {
        return name
          .toString()
          .toLowerCase()
          .indexOf(this.name.toLowerCase()) >= 0
      })
    }
  }
}
</script>
