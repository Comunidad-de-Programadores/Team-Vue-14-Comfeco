<template>
  <div class="about">
    <h1>This is an about page</h1>
    <community-list-events />
  </div>
</template>
<script>
import CommunityListEvents from '@/components/CommunitiesListCard/CommunityListEvents'
export default {
  components: {
    CommunityListEvents
  }
}
</script>
