<template>
  <div class="columns">
    <slot name="search"></slot>
    <form @change="languageChange()" class="column">
      <b-field >
        <b-select placeholder="Filtrar por lenguaje" expanded rounded v-model="language">
          <option value="">Todos</option>
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
  data() {
    return {
      language: null
    }
  },
  methods: {
    languageChange() {
      this.$emit('selected', this.language)
    }
  }
}
</script>
