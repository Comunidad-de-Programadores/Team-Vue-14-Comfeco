<template>
  <div>
      <h3 class="is-size-3 has-text-weight-semibold	has-text-centered mt-6">Ellos ya creen en esta iniciativa</h3>
      <div class="mt-4 community-container" v-if="communities.length > 0">
        <Slider v-bind="tinySliderOptions" ref="slider" >
          <div v-for="(community, index) in communities" :key="index" class="">
            <div class="community">
              <img :src="community.image" alt="" class="community-image">
              <div class="community-name">
                <p class="community-language">
                  <span>{{community.language}}</span>
                </p>
                <p>{{community.name}}</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
  </div>
</template>
<script>
import Slider from 'vue-tiny-slider';
import CommunityService from '@/services/community.services'
export default {
  name: 'CommunityCarrousel',
  components: {
    Slider
  },
  mounted() {
  },
  data () {
    return {
      tinySliderOptions: {
        loop: true,
        gutter: 20,
        items: 2,
        navPosition: 'bottom',
        controls: false,
        responsive: {
          640: {
            items: 2
          },
          700: {
            items: 3
          },
          900: {
            items: 4
          }
        }
      },
      communities: [],
    }
  },
  async created () {
    this.communities = await CommunityService.getAll()
  }
}
</script>
<style lang="scss">
  .community{
    &-container{
      .tns-nav{
        text-align: center;
        margin-top: 10px;
        button{
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border:none;
          margin: 0 3px;
          background: $yellow-hard;
          &.tns-nav-active{
            background: $purple-hard;
          }  
        }

      }
    }
    &-name{
      background: $purple-hard;
      padding: 25px;
      color: $white;
      text-align: center;
      height: 60px;
      position: relative;
    }
    &-image{
      display: block;
    }
    &-language{
      background: $yellow-hard;
      padding: 10px;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -10px;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 50%;
    }
  }
</style>