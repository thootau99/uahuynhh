<template>
  <div class="container" :class="{dark: darkMode}">
    <Title />
    <Exp />
    <Skill />
    <Language />
    <Works />
    <ToggleDark @darkMode="toggleDark" v-bind:isDark="darkMode" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return{
      darkMode: false
    }
  },
  methods: {
    toggleDark() {
      this.darkMode = !this.darkMode
    }
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
