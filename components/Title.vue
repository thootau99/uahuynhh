<template>
  <div class="flex flex-wrap justify-start w-full p-4 border-2 border-gray-300 border-b-0 rounded-tr-3xl shadow dark:bg-gray-900 dark:text-white dark:border-gray-900">
    <div class="flex-1 flex-shrink-0 relative overflow-hidden md:flex-initial md:w-44">
      <div class="w-full overflow-hidden shadow rounded-full border-2 border-gray-300 border-solid">
        <img class="w-full h-full" src="http://placekitten.com/300/300" alt="">
      </div>
    </div>

    <div class="flex-1 ml-4 my-0 md:mx-8 md:my-4 md:w-80">
      <h1 class="text-lg md:text-2xl">許皇琪<br class="block md:hidden"/><span class="text-sm md:text-xl md:ml-8">Web Developer</span></h1>
      <span class="text-sm">使用 Rails 與 React, Vue 結合開發全端。</span>
      <div class="w-full hidden md:block">
        <div class="flex my-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-auto mr-4 fill-current text-black dark:text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          <span class="text-base" href="#">Taichung, Taiwan</span>
        </div>
        <div class="flex my-4">
          <svg class="h-6 w-auto mr-4 fill-current text-black dark:text-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>

          <span class="text-base" href="#">uahuynhh</span>
        </div>
        <div class="flex my-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-auto mr-4 fill-current text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-base" href="#">thootau99@tutanota.com</span>
        </div>  
      </div>
    </div>
    
    <div class="break"></div>
    <div class="w-full block md:hidden">
        <div class="flex my-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-auto mr-1 fill-current text-black dark:text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          <span class="text-base" href="#">Taichung, Taiwan</span>
        </div>
        <div class="flex my-2">
          <svg class="h-6 w-auto mr-1 fill-current text-black dark:text-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          <span class="text-base" href="#">uahuynhh</span>
        </div>
        <div class="flex my-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-auto mr-1 fill-current text-black dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-base" href="#">thootau99@tutanota.com</span>
        </div>  
    </div>
  </div>
</template>