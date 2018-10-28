<template lang="pug">
  section.container
    logo
    h1
      |BOREALIS
    h2
      |MDEV Nuxt.js Boilerplate
    .mdev-bg-circle
</template>


<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">

  body {
    background: #69aeff;
    color: #5471e8;
  }

  .container {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      padding: 5vh 0 2vh;
    }
  }

  $radius: 65vh;

  .mdev-bg-circle {
    width: $radius;
    height: $radius;
    border-radius: 50%;
    background: #54bfe8;
    z-index: -1;
    position: absolute;
  }
</style>
