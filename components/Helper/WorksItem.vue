<template>
  <div class="flex flex-wrap w-full md:h-full md:w-1/2 border-2 rounded shadow dark:border-black">
    <div class="flex flex-shrink-0 md:justify-center w-full flex-1 m-0 md:m-4">
      <img class="h-48 md:h-64" :src="imgPathToURL(image)" alt=""/>
    </div>
    <div class="flex flex-shrink-1 flex-1 flex-col md:h-full md:p-4">
      <h1 class="text-xl md:text-2xl"><a :href="`${link}`">{{title}}</a></h1>
      <p class="whitespace-pre-wrap break-words text-sm md:text-lg">{{description}}</p>
    </div>
    <div class="break"></div>
    <div class="flex flex-wrap md:w-full p-0.5 md:p-4">
      <p class="text-white bg-gray-700 rounded-lg p-2 shadow m-0.5" v-for="tag in tags" :key="description +　tag">#{{tag}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'link', 'description', 'image', 'tags'],
  methods: {
    imgPathToURL(path) {
      try{
        return require(`~/assets/workImages/${path}`)
      } catch {
        return 'http://placekitten.com/200/300'
      }
    },

  }
}
</script>
