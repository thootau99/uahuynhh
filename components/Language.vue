<template>
  <div class="flex flex-wrap justify-start w-full p-4 border-2 border-t-0 border-b-0 border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-900 shadow">
    <div class="flex-1">
      <h1 class="text-lg mb-2 text-xl md:text-2xl">
        <b>語言能力</b>
      </h1>
    </div>
    <div class="break"></div>
    <div class="flex flex-col w-full md:flex-row">
      <div class="flex-1 md:m-2">
        <ul v-for="item in lang" :key="item.context">
          <li>
            <HelperSkillContent v-bind:width=item.width v-bind:content="item.context" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        lang: [{'context': 'Japanese (JLPT N4)', width:'60'}, 
        {'context': 'English (TOEIC 620)', width:'60'},
        {'context': 'Taiwanese', width:'85'},
        {'context': 'Mandrain', width:'80'},
        ],
      }
    }
  }
</script>