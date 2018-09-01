<template>
  <div id="app">
    <Header></Header>
    <!-- <div style="height:50px;width:50px;background:black;"></div> -->
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./components/Header.vue"

export default {
  name: "app",
  components: {
    Header
  },
  data() {
    return {

    }
  },
  create(){
  },

}
</script>
<style lang="scss">
@import "./assets/css/common";
</style>
