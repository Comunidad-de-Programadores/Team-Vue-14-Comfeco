<template>
  <div class="columns">
    <b-field class="column">
      <b-autocomplete
        rounded
        placeholder="Bucar grupo"
        icon="magnify"
        clearable
      >
      </b-autocomplete>
    </b-field>
    <b-field class="column">
      <b-select placeholder="Filtrar por lenguaje" expanded rounded>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </b-select>
    </b-field>
  </div>
</template>
<script>
export default {
  name: 'GroupInput'
}
</script>