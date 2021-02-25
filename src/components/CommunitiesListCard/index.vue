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
            'http://www.paredro.com/wp-content/uploads/2015/11/LOGOS-CUADRADOS-05.png',
          name: 'Comunidad de programadores',
          link: '#',
        },
        {
          img:
            'http://www.paredro.com/wp-content/uploads/2015/11/LOGOS-CUADRADOS-05.png',
          name: 'El lenguaje de los programadores ',
          link: '#',
        },
        {
          img:
            'http://www.paredro.com/wp-content/uploads/2015/11/LOGOS-CUADRADOS-05.png',
          name: 'Latam Dev',
          link: '#',
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
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.8rem;
  span {
    color: white;
  }
}
</style>