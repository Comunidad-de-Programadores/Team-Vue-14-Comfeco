<template>
    <div class="flex">
        <div class="column">
            <p class="is-size-1-desktop is-size-1-mobile is-size-1-touch has-text-centered ml-5">Bienvenidos!</p>
        </div>
        <div class="section_img column">
           <b-image
        class="container "
        :src=imgUrl
        >
        </b-image>
        </div>
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
<<<<<<< HEAD
      imgUrl: require('@/assets/woman.png'),
=======
      imgUrl: require('@/assets/woman.png')
>>>>>>> development
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
<<<<<<< HEAD
=======
  flex-wrap: wrap;
>>>>>>> development
}
.column {
  flex-direction: column;
  align-self: center;
}
.section_img {
  width: 300px;
  margin: 0;
}
@media only screen and (max-width: 600px) {
  .flex {
    display: flex;
    .column {
      flex-direction: row;
      margin: 20px;
    }
  }
}
</style>

