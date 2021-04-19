<template>
  <div class="whole border-2 border-gray-300 bg-white rounded shadow">
    <div v-bind:style="{ width: `${width}%`}" class="transition-all ease-linear bg-gray-700 h-full"></div>
  </div>
</template>

<style scoped>
  .whole {
    width: 100%;
    height: 1.5rem;
  }
  .black {
    width: 0%;
  }
  
</style>


<script>
export default {
  props: ['width']
}
</script>
