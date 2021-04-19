<template>
    <div class="flex flex-wrap justify-start w-full p-4 border-2 border-t-0 border-b-0 border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-900 shadow">
      <div class="flex-1">
        <h1 class="text-lg mb-2 text-xl md:text-2xl"><b>作品</b></h1>
      </div>
      <div class="break"></div>
      <div class="flex flex-1 w-full h-full flex-wrap">
          <HelperWorksItem v-for="work in works" :key="work.title" v-bind:title="work.title" v-bind:description="work.description" v-bind:image="work.image" v-bind:tags="work.tags" />
      </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      works: [{'title': '畢業作品', 'description': '透過 OpenCV 偵測地板上的路線，使無人機自動飛行；飛行的同時使用人臉辨識系統，透過手機 APP 達到警示的效果。', 'image' : 'test1.png', 'tags': ['OpenCV', 'Tensorflow', 'Flutter', 'Flask']},
      {'title': '台語諺文書寫工具及字典', 'description': '使用 Python 拆開台語白話字後，重新組成諺文。在 Heroku 上佈署；另外使用 MongoDB Altas 做為字典 Database，配合 Flask 去找資料。 ', 'image' : 'test2.png', 'tags': ['Python', 'JamoTools', 'Flask', 'React', 'MongoDB', 'Heroku']},
      {'title': '遊戲自動操作工具', 'description': '使用 PyAutoGUI 偵測畫面內容與自動操作，VM 間使用 Ruby on Rails Server 互相溝通，並在例外時使用 Discord bot 提醒使用者。', 'image' : '', 'tags': ['PyAutoGUI', 'Rails', 'Ruby', 'DiscordBot', 'Postgresql', 'Docker']},
      {'title': '這份履歷 <3', 'description': '使用 Nuxt.js + Tailwind CSS 開發', 'image' : 'reresu.png', 'tags': ['VueJS', 'Nuxt.js']},
      ]
    }
  }
}
</script>
