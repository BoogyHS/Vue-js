<template>
  <div id="app">
    <HelloWorld />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer
  }
}
</script>

<style>

</style>
