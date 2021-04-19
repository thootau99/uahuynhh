<template>
  <div class="flex p-4">
    <p class="flex-1 mx-2 text-sm md:text-lg">{{content}}</p>
    <HelperBar class="flex-1" v-bind:width="width"/>
  </div>
</template>

<script>
export default {
  props: ['content', 'width']
}
</script>
