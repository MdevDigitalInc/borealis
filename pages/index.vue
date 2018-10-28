<template lang="pug">
  section.container
    logo
    h1
      |BOREALIS
    h2
      |MDEV NUXT BOILERPLATE
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
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
