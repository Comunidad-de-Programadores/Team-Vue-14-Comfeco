<template>
  <div class="item">
    <img :src="img" :alt="img" />
    <h4>{{ name }}</h4>
    <div class="link">
      <a :href="link" target="_blank">Unirme</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  border-bottom: 1px solid black;
  padding-top: 8px;
  padding-bottom: 8px;
  img {
    min-width: 40px;
    width: 40px;
    min-height: 40px;
    height: 40px;
    margin-right: 8px;
  }
  h4 {
    align-self: center;
    font-size: 0.8rem;
    flex-grow: 1;
    font-weight: 600;
  }
  .link {
    margin-left: 8px;
    display: flex;
    align-items: flex-end;
    a {
      font-size: 0.75rem;
    }
  }
}
</style>