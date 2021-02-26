<template>
  <div>
      <div class="mt-6 sponsors-container container" >
        <h4 class="is-size-3 has-text-weight-semibold	has-text-left mt-6">Sponsors</h4>
       <button id="prev" class="sponsors-slider-prev"></button>
        <Slider v-bind="tinySliderOptions" ref="slider" >
          <div v-for="(img, i) in url" :key="i" class="">
            <div class="sponsors" >
              <img :src="img.src" alt="" class="sponsors-image">
            </div>
          </div>
        </Slider>
        <button id="next" class="sponsors-slider-next"></button>
      </div>
  </div>
</template>
<script>
import Slider from 'vue-tiny-slider'
export default {
  name: 'SponsorViews',
  components: {
    Slider
  },
  data() {
    return {
      tinySliderOptions: {
        arrowKeys: true,
        loop: false,
        gutter: 10,
        items: 2,
        nextButton: '#next',
        prevButton: '#prev',
        navPosition: 'bottom',
        controls: true,
        responsive: {
          360: {
            items: 4
          },
          640: {
            items: 4
          },
          700: {
            items: 5
          },
          900: {
            items: 8
          }
        }
      },
      url: [
        { src: require('@/assets/sponsors/huawei.png') },
        { src: require('@/assets/sponsors/codigofacilito.png') },
        { src: require('@/assets/sponsors/dominicode.png') },
        { src: require('@/assets/sponsors/egghead.png') },
        { src: require('@/assets/sponsors/fernandoherrera.png') },
        { src: require('@/assets/sponsors/codelytv.png') },
        { src: require('@/assets/sponsors/tekki.png') },
        { src: require('@/assets/sponsors/josedimaslujan.png') },
        { src: require('@/assets/sponsors/latamdev.png') },
        { src: require('@/assets/sponsors/leonidasesteban.png') },
        { src: require('@/assets/sponsors/stacklycode.png') }
      ]
    }
  }
}
</script>
<style lang="scss" >
.container {
  width: 100%;
}
.sponsors {
  #align-center {
    display: flex;
    align-items: center;
  }
  &-slider-prev {
    cursor: pointer;
    position: absolute;
    left: 20px;
    top: calc(50% - 15px);
  }
  &-slider-next {
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: calc(50% - 15px);
  }
  &-container {
    .tns-outer {
      position: relative;
      padding: 0 45px;
    }
    .tns-outer {
      position: relative;
    }
    .tns-nav {
      text-align: center;
      margin-top: 10px;
      button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: none;
        margin: 0 3px;
        background: $yellow-hard;
        &.tns-nav-active {
          background: $purple-hard;
        }
      }
    }

    #prev {
      outline: none;
      width: 40px;
      height: 40px;
      z-index: 2;
      background-color: transparent;
      border: none;
      border-top: 5px solid #b5b5b5;
      border-left: 5px solid #b5b5b5;
      transform: rotate(-45deg) skew(15deg, 15deg);
    }
    #next {
      outline: none;
      width: 40px;
      height: 40px;
      background-color: transparent;
      border: none;
      border-bottom: 5px solid #b5b5b5;
      border-right: 5px solid #b5b5b5;
      transform: rotate(-45deg) skew(15deg, 15deg);
    }
  }
  &-image {
    display: block;
    clip-path: circle(40% at 50% 50%);
  }
}
</style>