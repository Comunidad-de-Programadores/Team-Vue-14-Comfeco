<template>
  <div class="container-small box ">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ContainerSmall'
}
</script>
<style lang="scss">
  .container-small{
    max-width: 450px;
    margin: auto;
  }
</style>