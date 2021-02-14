
<template>
    <footer class="custom-footer">
        <div class="container">
            <div class="content flex has-text-centered">
               <div class="column ">
                   <p class="has-text-weight-medium">COMFECO 2021</p>
               </div>
               <div class="column ">
                   <p>Team Vue 14</p>
               </div>
               <div class="flex p-12">
                   <p class="row ml-5">ICON</p>
                   <p class="row ml-5">ICON</p>
                   <p class="row ml-5">ICON</p>
                   <p class="row ml-5">ICON</p>
               </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss" scoped>
@import "src/styles/main.scss";
.custom-footer {
  height: 50px;
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
      margin: auto;
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
