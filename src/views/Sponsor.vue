<template>
<layout>
    <div class="container">
      <section class="container-small box">     
          <b-carousel
              :autoplay="false"
              :arrow="arrow"
              :repeat="arrowBoth"
              :arrow-hover="arrowHover"
              :icon-pack="iconPack"
              :icon-prev="iconPrev"
              :icon-next="iconNext"
              :icon-size="iconSize">
              <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                  <section  class="hero is-medium img_sponsors">
                    <div  v-for="(item, i ) in carousel.url" :key="i">
                      <img :src=item.src alt="">
                    </div>
                  </section>
              </b-carousel-item>
          </b-carousel>
      </section>
  </div>
</layout>           
</template>
<script>
import Layout from '@/components/layouts/Layout'
export default {
  name: 'SponsorViews',
  components: {
    Layout
  },
  data() {
    return {
      autoPlay: false,
      arrow: true,
      arrowBoth: true,
      arrowHover: false,
      iconPack: 'mdi',
      iconPrev: 'arrow-left',
      iconNext: 'arrow-right',
      iconSize: 'is-small',
      carousels: [
        {
          title: 'section 1',
          url: [
            { src: require('@/assets/sponsors/huawei.png') },
            { src: require('@/assets/sponsors/codigofacilito.png') },
            { src: require('@/assets/sponsors/dominicode.png') },
            { src: require('@/assets/sponsors/egghead.png') },
            { src: require('@/assets/sponsors/fernandoherrera.png') },
            { src: require('@/assets/sponsors/codelytv.png') }
          ]
        },
        {
          title: 'section 2',
          url: [
            { src: require('@/assets/sponsors/tekki.png') },
            { src: require('@/assets/sponsors/josedimaslujan.png') },
            { src: require('@/assets/sponsors/latamdev.png') },
            { src: require('@/assets/sponsors/leonidasesteban.png') },
            { src: require('@/assets/sponsors/stacklycode.png') }
          ]
        },
        // {
        //   title: 'section 3',
        //   url: []
        // }
      ]
    }
  }
}
</script>
<style lang="scss">
.container-small {
  max-width: 450px;
  margin: auto;
  .img_sponsors {
    display: flex;
    flex-direction: row;
    align-items: center;
    div img {
      padding: 5px;
      clip-path: circle(40% at 50% 50%);
    }
  }
}
</style>