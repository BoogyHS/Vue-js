<template>
  <div id="app">
    <Navbar/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/navbar/Navbar.vue'


export default Vue.extend({
  
})
</script>

<style lang="scss">
@import url("../src/assets/styles/reset.scss");
@import url("../src/assets/styles/layout.scss");
@import url("../src/assets/styles/typography.scss");
</style>
