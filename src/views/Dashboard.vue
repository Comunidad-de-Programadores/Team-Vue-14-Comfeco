<template>
    <div>
      <layout>
       <welcome-view />
      </layout>
    </div>
</template>
<script>
import Layout from "@/components/layouts/Layout";
import WelcomeView from "./Welcome";

export default {
    name:"Dashboard",
    components:{
        Layout,
        WelcomeView
        }
}
</script>
