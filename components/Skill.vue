<template>
<div class="flex flex-wrap justify-start w-full p-4 border-2 border-t-0 border-b-0 border-gray-700 shadow bg-gray-700 text-white">
  <div class="flex-1">
      <h1 class="text-lg mb-2 text-xl md:text-2xl">
        <b>技能</b>
      </h1>
    </div>
    <div class="break"></div>
    <div class="skill_inner flex flex-col w-full md:flex-row">
      <div class="flex-1 md:m-2">
        <h1 class="text-md md:text-xl">Front-end</h1>
        <hr />
        <ul>
          <li v-for="item in frontend" :key="item.context">
            <HelperSkillContent v-bind:width=item.width v-bind:content=item.context />
          </li>
        </ul>
      </div>
      <div class="flex-1 md:m-2">
        <h1 class="text-md md:text-xl">Back-end</h1>
        <hr />
        <ul>
          <li v-for="item in backend" :key="item.context">
            <HelperSkillContent v-bind:width=item.width v-bind:content=item.context />
          </li>
        </ul>
      </div>
      <div class="flex-1 md:m-2">
        <h1 class="text-md md:text-xl">Other</h1>
        <hr />
        <ul>
          <li v-for="item in other" :key="item.context">
            <HelperSkillContent v-bind:width=item.width v-bind:content=item.context />
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
        frontend: [{'context': 'TypeScript', width:'80'}, 
        {'context': 'ReactJS', width:'69'},
        {'context': 'VueJS', width:'50'},
        {'context': 'Webpack', width:'30'},
        {'context': 'Electron', width:'50'},
        {'context': 'Tailwind CSS', width:'70'},
        ],
        backend: [{'context': 'Flask', width:'60'},
        {'context': 'Rails', width:'65'},
        {'context': 'MySQL', width:'40'},
        {'context': 'MongoDB', width:'60'},
        {'context': 'Firebase', width:'60'},
        ],
        other: [{'context': 'Flutter', width:'50'},
          {'context': 'ReactNative', width:'20'},
          {'context': 'Git', width:'70'},
        ]
      }
    }
  }
</script>
