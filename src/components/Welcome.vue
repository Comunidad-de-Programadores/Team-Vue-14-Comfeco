<template>
  <div class="is-flex">
    <div class="is-flex-direction-column">
      <p class="is-size-1-desktop is-size-1-mobile has-text-centered ml-5">
        Bienvenidos!
      </p>
    </div>
    <div class="is-flex-direction-column">
      <b-image class="container" :src="imgUrl"> </b-image>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WelcomeView',
  data() {
    return {
      imgUrl: require('@/assets/woman.png'),
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_main.scss';
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
p {
  font-family: 'Lobster', cursive;
  color: $purple-hard;
}
.flex {
  display: flex;
}
.img-welcome {
  height: 300px;
}
@media only screen and (max-width: 600px) {
  .flex {
    display: flex;
    flex-direction: row;
  }
}
</style>

