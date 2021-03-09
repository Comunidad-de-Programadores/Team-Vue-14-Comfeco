<template>
  <section>
    <b-notification aria-close-label="Close notification" :closable="false">
      Aquí van las insignias_____________Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
      fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
      laoreet elit
    </b-notification>
    <activity />
  </section>
</template>

<script>
import Activity from '@/components/Activity'

export default {
  name: 'ProfileBox',
  components: {
    Activity
  }
}
</script>
