<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/> <!--当前路由-->
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide/FooterGuide.vue";


  export default {
    async mounted(){
      this.$store.dispatch('getAddress')
    },
    components: {
      FooterGuide
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    margin: 0;
  }
</style>
