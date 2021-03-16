<template>
  <div class="card">
    <div class="-img-group">
      <img
        :src="group.image"
        :alt="group.tag"
        style="width: 100%; max-height: 100%"
      >
    </div>
    <div class="">
      <b-tag
        :type="typeGroup"
        size="is-medium"
        class="mt-2 mb-5"
      >
        {{group.tag }}
      </b-tag>
      <div class="p-3">
        <h3 class="has-text-weight-bold  is-size-4">{{ group.name }}</h3>
        <p class="my-3">
          {{ group.description }}
        </p>
        <div class="buttons">
          <b-button :type="typeGroup" expanded>
            Unirse
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GroupCard',
  props: {
    group: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      typeGroup: ''
    }
  },
  mounted() {
    this.typeGroup = this.typeGroupMethod()
  },
  methods: {
    typeGroupMethod() {
      if(this.group.tag === 'Python') {
        return 'is-success'
      } else if(this.group.tag === 'Tekki') {
        return '-is-primary'
      }
    }
  }
}
</script>
<style scoped>
.-img-group {
  height: 10rem;
}
.-is-primary {
  background-color: purple;
  color: #fff;
}
</style>
