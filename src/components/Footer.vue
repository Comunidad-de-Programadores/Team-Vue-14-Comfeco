
<template>
    <footer class="custom-footer">
        <div class="container">
            <div class="content flex has-text-centered">
               <div class="column ">
                 <router-link to="/" class="has-text-weight-medium">
                   COMFECO 2021
                 </router-link>
               </div>
               <div class="column ">
                   <p>Team Vue 14</p>
               </div>
               <div class="flex p-12">
                   <div class="row ml-5">
                     <icon-discord />
                   </div>
                   <div class="row ml-5">
                     <icon-facebook />
                   </div>
                   <div class="row ml-5">
                     <icon-youtube />
                   </div>
               </div>
            </div>
        </div>
    </footer>
</template>
<script>
import IconDiscord from '@/components/Icon/IconDiscord.vue'
import IconFacebook from '@/components/Icon/IconFacebook.vue'
import IconYoutube from '@/components/Icon/IconYoutube.vue'
export default {
  name: 'Footer',
  components: {
    IconDiscord,
    IconFacebook,
    IconYoutube
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/_main.scss';
.custom-footer {
  height: auto;
  color: $yellow-hard;
  margin-top:160px;
  background-color: $purple-hard-2;
  a {
    color: $yellow-hard !important;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    .p-12 {
      padding: 12px;
      margin: auto;
    }
    .ml-5 {
      margin: 0 5px;
    }
    .row {
      flex-direction: row;
      align-self: center;
    }
    .column {
      flex-direction: column;
      align-self: center;
    }
  }
}
@media only screen and (max-width: 600px) {
  .custom-footer {
    height: 100px;
    color: $yellow-hard;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: $purple-hard-2;
    .flex {
      display: flex;
      flex-wrap: wrap;
      .p-12 {
        padding: 12px;
        padding-bottom: 0px;
      }
      .ml-5 {
        margin: 0 5px;
      }
      .row {
        flex-direction: row;
      }
      .column {
        flex-direction: column;
      }
    }
  }
}
</style>
