<template>
  <article class="card">
    <div class="card-content">
      <div class="header">
        <span>Comunidades</span>
        <a href="#">Ver mas</a>
      </div>
      <community-list-item
        v-for="(community, index) in communities"
        :key="index"
        v-bind="community"
      ></community-list-item>
    </div>
  </article>
</template>

<script>
import CommunityListItem from '@/components/CommunitiesListCard/CommunityListItem'
export default {
  components: {
    CommunityListItem,
  },
  data() {
    return {
      communities: [
        {
          img:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Font_Awesome_5_brands_discord_color.svg/1200px-Font_Awesome_5_brands_discord_color.svg.png',
          name: 'Comunidad de programadores',
          link: 'https://discord.gg/GhnDKqrjH8',
        },
        {
          img: 'https://www.comfeco.com/icons/code-icon.svg',
          name: 'COMFECO ',
          link: 'https://www.comfeco.com/',
        },
        {
          img: 'https://es.vuejs.org/images/logo.png',
          name: 'Vuejs en español',
          link: 'https://www.facebook.com/groups/vue.es/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_main.scss';
.card {
  background-color: $purple-light-2;
  margin-top: 10rem;
  height: 18rem;
  font-size: 0.8rem;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.9rem;
  span {
    color: white;
  }
}
</style>