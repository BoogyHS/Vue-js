<template>
  <div>
    <!-- <HelloWorld /> -->
    <Navbar />
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Footer from './components/footer/Footer.vue'
import Navbar from './components/core/navbar/Navbar.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Footer,
    Navbar
  }
}
</script>

<style>
@import url('../src/assets/styles/reset.css');
@import url('../src/assets/styles/layout.css');
@import url('../src/assets/styles/typography.css');
</style>