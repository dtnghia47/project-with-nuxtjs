<template v-bind:class="demo">
  <div class="layout-public">
    <div class="bg" />
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style>
  .layout-public {
    position: relative;
  }

  .bg {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0.8;
    z-index: -1;
    background-image: url('~assets/images/bg_test.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
