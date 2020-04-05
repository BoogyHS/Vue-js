<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/core/header/Header.vue'
import Footer from './components/core/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
@import url('../src/assets/styles/reset.css');
@import url('../src/assets/styles/layout.css');
@import url('../src/assets/styles/typography.css');

body {
    max-width: 1366px;
    margin: auto;
    position: relative;
    min-height: 100vh;
}
</style>