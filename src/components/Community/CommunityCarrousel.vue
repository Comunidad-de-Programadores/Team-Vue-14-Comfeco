<template>
  <div>
      <h3 class="is-size-3 has-text-weight-semibold	has-text-centered mt-6">Ellos ya creen en esta iniciativa</h3>
      <div class="mt-4">
        <Slider v-bind="tinySliderOptions" ref="slider" :auto-init="false" >
          <div v-for="(community, index) in communities" :key="index">
            <p>{{community.name}}</p>
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
        loop: false,
        gutter: 20,
        items: 3,
      },
      communities: [],
    }
  },
  async created () {
    this.communities = await CommunityService.getAll()
    this.$nextTick( () => this.$refs.slider.init() )
  }
}
</script>