<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("../src/assets/styles/reset.scss");
@import url("../src/assets/styles/layout.scss");
@import url("../src/assets/styles/typography.scss");



</style>
