<template>
  <div>
    <!-- <HelloWorld /> -->
    <Navbar />
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/footer/Footer.vue'
import Navbar from './components/navbar/Navbar.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Footer,
    Navbar
  }
}
</script>

<style>

</style>