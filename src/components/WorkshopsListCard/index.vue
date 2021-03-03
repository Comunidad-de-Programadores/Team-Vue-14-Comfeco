<template>
  <article class="card">
    <div class="card-content">
      <div class="header">
        <span>Talleres</span>
        <a href="#">Ver mas</a>
      </div>
      <div class="select is-fullwidth">
        <select>
          <option value="0">Talleres por areas de conocimiento</option>
        </select>
      </div>
      <p class="card-subtitle">Hoy</p>
      <workshops-list-item
        v-for="(community, index) in communities"
        :key="index"
        v-bind="community"
      ></workshops-list-item>
    </div>
  </article>
</template>

<script>
import WorkshopsListItem from '@/components/WorkshopsListCard/WorkshopsListItem'
export default {
  components: {
    WorkshopsListItem,
  },
  data() {
    return {
      communities: [
        {
          title: 'State of javascript',
          time: '20:00',
          moderator: 'Juan Pablo de la torre',
          moderatorUrl: 'www.facebook.com',
          status: 'finished',
        },
        {
          title: 'State of javascript',
          time: '20:00',
          moderator: 'Juan Pablo de la torre',
          moderatorUrl: 'www.facebook.com',
          status: 'pending',
        },
        {
          title: 'State of javascript',
          time: '20:00',
          moderator: 'Juan Pablo de la torre',
          moderatorUrl: 'www.facebook.com',
          status: 'pending',
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
  overflow-y: scroll;
  font-size: 0.8rem;
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 0.9rem;
    span {
      color: white;
    }
  }
  &-subtitle {
    margin-top: 1rem;
    margin-bottom: 0.25rem;
    background: #333;
    color: white;
    padding-left: 1rem;
  }
}
</style>