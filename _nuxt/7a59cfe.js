(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2,3,4,5,6,8,9,10,11],{264:function(t,e,l){var content=l(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(52).default)("1a37b118",content,!0,{sourceMap:!1})},265:function(t,e,l){"use strict";l(264)},266:function(t,e,l){var r=l(51)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.whole[data-v-1f553d67]{\n  width:100%;\n  height:1.5rem\n}\n.black[data-v-1f553d67]{\n  width:0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},267:function(t,e,l){"use strict";l.r(e);var r={props:["width"]},n=(l(265),l(50)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"whole border-2 border-gray-300 bg-white rounded shadow"},[l("div",{staticClass:"transition-all ease-linear bg-gray-700 h-full",style:{width:t.width+"%"}})])}),[],!1,null,"1f553d67",null);e.default=component.exports},268:function(t,e,l){"use strict";l.r(e);var r={props:["content","width"]},n=l(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex p-4"},[l("p",{staticClass:"flex-1 mx-2 text-sm md:text-lg"},[t._v(t._s(t.content))]),t._v(" "),l("HelperBar",{staticClass:"flex-1",attrs:{width:t.width}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HelperBar:l(267).default})},269:function(t,e,l){var map={"./reresu.png":270,"./test1.png":271,"./test2.png":272,"./test3.webp":273};function r(t){var e=n(t);return l(e)}function n(t){if(!l.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=n,t.exports=r,r.id=269},270:function(t,e,l){t.exports=l.p+"img/reresu.83214cc.png"},271:function(t,e,l){t.exports=l.p+"img/test1.d685a29.png"},272:function(t,e,l){t.exports=l.p+"img/test2.e78dfae.png"},273:function(t,e,l){t.exports=l.p+"img/test3.f269010.webp"},274:function(t,e,l){"use strict";l.r(e);var r={props:["title","link","description","image","tags"],methods:{imgPathToURL:function(path){try{return l(269)("./".concat(path))}catch(t){return"http://placekitten.com/200/300"}}}},n=l(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-wrap w-full md:h-full md:w-1/2 border-2 rounded shadow dark:border-black"},[l("div",{staticClass:"flex flex-shrink-0 md:justify-center w-full flex-1 m-0 md:m-4"},[l("img",{staticClass:"h-48 md:h-64",attrs:{src:t.imgPathToURL(t.image),alt:""}})]),t._v(" "),l("div",{staticClass:"flex flex-shrink-1 flex-1 flex-col md:h-full md:p-4"},[l("h1",{staticClass:"text-xl md:text-2xl"},[l("a",{attrs:{href:""+t.link}},[t._v(t._s(t.title))])]),t._v(" "),l("p",{staticClass:"whitespace-pre-wrap break-words text-sm md:text-lg"},[t._v(t._s(t.description))])]),t._v(" "),l("div",{staticClass:"break"}),t._v(" "),l("div",{staticClass:"flex flex-wrap md:w-full p-0.5 md:p-4"},t._l(t.tags,(function(e){return l("p",{key:t.description+e,staticClass:"text-white bg-gray-700 rounded-lg p-2 shadow m-0.5"},[t._v("#"+t._s(e))])})),0)])}),[],!1,null,null,null);e.default=component.exports},275:function(t,e,l){"use strict";l.r(e);var r=l(50),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-wrap justify-start w-full p-4 border-2 border-gray-300 border-b-0 rounded-tr-3xl shadow dark:bg-gray-900 dark:text-white dark:border-gray-900"},[t._m(0),t._v(" "),l("div",{staticClass:"flex-1 ml-4 my-0 md:mx-8 md:my-4 md:w-80"},[t._m(1),t._v(" "),l("span",{staticClass:"text-sm"},[t._v("使用 NodeJS 與 React 結合開發全端。")]),t._v(" "),l("div",{staticClass:"w-full hidden md:block"},[l("div",{staticClass:"flex my-4"},[l("svg",{staticClass:"h-6 w-auto mr-4 fill-current text-black dark:text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z","clip-rule":"evenodd"}})]),t._v(" "),l("span",{staticClass:"text-base",attrs:{href:"#"}},[t._v("Taichung, Taiwan")])]),t._v(" "),l("div",{staticClass:"flex my-4"},[l("svg",{staticClass:"h-6 w-auto mr-4 fill-current text-black dark:text-white",attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[l("title",[t._v("GitHub icon")]),l("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})]),t._v(" "),l("span",{staticClass:"text-base",attrs:{href:"#"}},[t._v("uahuynhh")])]),t._v(" "),l("div",{staticClass:"flex my-4"},[l("svg",{staticClass:"h-6 w-auto mr-4 fill-current text-black dark:text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})]),t._v(" "),l("span",{staticClass:"text-base",attrs:{href:"#"}},[t._v("thootau99@tutanota.com")])])])]),t._v(" "),l("div",{staticClass:"break"}),t._v(" "),l("div",{staticClass:"w-full block md:hidden"},[l("div",{staticClass:"flex my-2"},[l("svg",{staticClass:"h-6 w-auto mr-1 fill-current text-black dark:text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z","clip-rule":"evenodd"}})]),t._v(" "),l("span",{staticClass:"text-base",attrs:{href:"#"}},[t._v("Taichung, Taiwan")])]),t._v(" "),l("div",{staticClass:"flex my-2"},[l("svg",{staticClass:"h-6 w-auto mr-1 fill-current text-black dark:text-white",attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[l("title",[t._v("GitHub icon")]),l("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})]),t._v(" "),l("span",{staticClass:"text-base",attrs:{href:"#"}},[t._v("uahuynhh")])]),t._v(" "),l("div",{staticClass:"flex my-2"},[l("svg",{staticClass:"h-6 w-auto mr-1 fill-current text-black dark:text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})]),t._v(" "),l("span",{staticClass:"text-base",attrs:{href:"#"}},[t._v("thootau99@tutanota.com")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-1 flex-shrink-0 relative overflow-hidden md:flex-initial md:w-44"},[e("div",{staticClass:"w-full overflow-hidden shadow rounded-full border-2 border-gray-300 border-solid"},[e("img",{staticClass:"w-full h-full",attrs:{src:"http://placekitten.com/300/300",alt:""}})])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("h1",{staticClass:"text-lg md:text-2xl"},[t._v("許皇琪"),l("br",{staticClass:"block md:hidden"}),l("span",{staticClass:"text-sm md:text-xl md:ml-8"},[t._v("Web Developer")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:l(275).default})},276:function(t,e,l){var content=l(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(52).default)("1b30ee58",content,!0,{sourceMap:!1})},278:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{frontend:[{context:"React",width:"69"},{context:"Vue",width:"50"},{context:"Webpack",width:"30"},{context:"Electron",width:"50"},{context:"Tailwind CSS",width:"50"}],backend:[{context:"Flask",width:"60"},{context:"Rails",width:"40"},{context:"Golang",width:"30"},{context:"Python",width:"60"},{context:"NodeJS",width:"75"},{context:"MySQL",width:"75"},{context:"MongoDB",width:"60"},{context:"Firebase",width:"60"}],other:[{context:"Flutter",width:"50"},{context:"TypeScript",width:"60"},{context:"ReactNative",width:"20"},{context:"Swift",width:"30"},{context:"Git",width:"70"},{context:"Docker",width:"40"},{context:"Terraform",width:"20"}]}}},n=l(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-wrap justify-start w-full p-4 border-2 border-t-0 border-b-0 border-gray-700 shadow bg-gray-700 text-white"},[t._m(0),t._v(" "),l("div",{staticClass:"break"}),t._v(" "),l("div",{staticClass:"skill_inner flex flex-col w-full md:flex-row"},[l("div",{staticClass:"flex-1 md:m-2"},[l("h1",{staticClass:"text-md md:text-xl"},[t._v("Front-end")]),t._v(" "),l("hr"),t._v(" "),l("ul",t._l(t.frontend,(function(t){return l("li",{key:t.context},[l("HelperSkillContent",{attrs:{width:t.width,content:t.context}})],1)})),0)]),t._v(" "),l("div",{staticClass:"flex-1 md:m-2"},[l("h1",{staticClass:"text-md md:text-xl"},[t._v("Back-end")]),t._v(" "),l("hr"),t._v(" "),l("ul",t._l(t.backend,(function(t){return l("li",{key:t.context},[l("HelperSkillContent",{attrs:{width:t.width,content:t.context}})],1)})),0)]),t._v(" "),l("div",{staticClass:"flex-1 md:m-2"},[l("h1",{staticClass:"text-md md:text-xl"},[t._v("Other")]),t._v(" "),l("hr"),t._v(" "),l("ul",t._l(t.other,(function(t){return l("li",{key:t.context},[l("HelperSkillContent",{attrs:{width:t.width,content:t.context}})],1)})),0)])])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex-1"},[l("h1",{staticClass:"text-lg mb-2 text-xl md:text-2xl"},[l("b",[t._v("技能")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HelperSkillContent:l(268).default})},279:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{lang:[{context:"Japanese (JLPT N4)",width:"60"},{context:"English (TOEIC 620)",width:"60"},{context:"Taiwanese",width:"85"},{context:"Mandrain",width:"80"}]}}},n=l(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-wrap justify-start w-full p-4 border-2 border-t-0 border-b-0 border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-900 shadow"},[t._m(0),t._v(" "),l("div",{staticClass:"break"}),t._v(" "),l("div",{staticClass:"flex flex-col w-full md:flex-row"},[l("div",{staticClass:"flex-1 md:m-2"},t._l(t.lang,(function(t){return l("ul",{key:t.context},[l("li",[l("HelperSkillContent",{attrs:{width:t.width,content:t.context}})],1)])})),0)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex-1"},[l("h1",{staticClass:"text-lg mb-2 text-xl md:text-2xl"},[l("b",[t._v("語言能力")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HelperSkillContent:l(268).default})},280:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{works:[{title:"畢業作品",link:"https://github.com/thootau99/ntcu_110_pi",description:"透過 OpenCV 偵測地板上的路線，使無人機自動飛行；飛行的同時使用人臉辨識系統，透過手機 APP 達到警示的效果。",image:"test1.png",tags:["OpenCV","Tensorflow","Flutter","Flask"]},{title:"台語諺文書寫工具及字典",link:"https://ganbun.herokuapp.com/",description:"使用 Python 拆開台語白話字後，重新組成諺文。在 Heroku 上佈署；另外使用 MongoDB Altas 做為字典 Database，配合 Flask 去找資料。 ",image:"test2.png",tags:["Python","JamoTools","Flask","React","MongoDB","Heroku"]},{title:"遊戲自動操作工具",link:"https://github.com/thootau99/fa_server",description:"使用 PyAutoGUI 偵測畫面內容與自動操作，VM 間使用 Ruby on Rails Server 互相溝通，並在例外時使用 Discord bot 提醒使用者。",image:"",tags:["PyAutoGUI","Rails","Ruby","DiscordBot","Postgresql","Docker"]},{title:"Plurk On Watch",link:"https://github.com/thootau99/ThootauPlurk",description:"透過 iPhone 做 OAuth 登入噗浪後，將 Token 同步到手錶上，讓手錶也可以瀏覽噗浪。",image:"test3.webp",tags:["Swift","SwiftUI","OAuth"]},{title:"DB temp",link:"https://github.com/thootau99/dbtemp",description:"透過API來執行 SQL 指令，在 DB 無法連線時 cache 指令，等 DB 恢復連線時即可上傳資料",image:"",tags:["NodeJS","Docker","DockerCompose"]},{title:"Auto Backup Config",link:"https://github.com/thootau99/autobackup_config",description:"執行後便可自動備份 config 到該 git repo 內，方便多台機器可以使用一樣的 config",image:"",tags:["Golang"]},{title:"這份履歷 <3",link:"",description:"使用 Nuxt.js + Tailwind CSS 開發",image:"reresu.png",tags:["VueJS","Nuxt.js"]}]}}},n=l(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-wrap justify-start w-full p-4 border-2 border-t-0 border-b-0 border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-900 shadow"},[t._m(0),t._v(" "),l("div",{staticClass:"break"}),t._v(" "),l("div",{staticClass:"flex flex-1 w-full h-full flex-wrap"},t._l(t.works,(function(t){return l("HelperWorksItem",{key:t.title,attrs:{title:t.title,link:t.link,description:t.description,image:t.image,tags:t.tags}})})),1)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex-1"},[l("h1",{staticClass:"text-lg mb-2 text-xl md:text-2xl"},[l("b",[t._v("作品")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HelperWorksItem:l(274).default})},281:function(t,e,l){"use strict";l.r(e);var r={props:["darkMode","isDark"],methods:{say:function(t){alert(t)}}},n=l(50),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"fixed w-24 h-24 z-50 bottom-0 right-0 p-4"},[l("button",{staticClass:"w-full h-full rounded-full bg-gray-400 shadow flex justify-center p-4",on:{click:function(e){return t.$emit("darkMode","")}}},[t.isDark?t.isDark?l("svg",{staticClass:"h-full w-full",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}})]):t._e():l("svg",{staticClass:"h-full w-full",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}})])])])}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,l){"use strict";l.r(e);var r=l(50),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex flex-wrap justify-start w-full p-4 border-2 border-t-0 border-b-0 border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-900 shadow"},[l("div",{staticClass:"flex-1"},[l("h1",{staticClass:"text-lg mb-2 text-xl md:text-2xl"},[l("b",[t._v("學歷、經歷")])])]),t._v(" "),l("div",{staticClass:"break"}),t._v(" "),l("div",{staticClass:"inner w-full flex flex-col"},[l("div",{staticClass:"flex justify-around"},[l("p",{staticClass:"m-2 text-sm md:text-lg"},[t._v("國立臺中科技大學"),l("br",{staticClass:"block md:hidden"}),l("span",{staticClass:"mx-0 md:mx-4"},[t._v("資訊工程系")])]),t._v(" "),l("p",{staticClass:"m-2 text-sm md:text-lg"},[t._v("學士")]),t._v(" "),l("p",{staticClass:"m-2 text-sm md:text-lg"},[t._v("2017-2019")])]),t._v(" "),l("div",{staticClass:"flex justify-around"},[l("p",{staticClass:"m-2 text-sm md:text-lg"},[t._v("國立臺中教育大學"),l("br",{staticClass:"block md:hidden"}),l("span",{staticClass:"mx-0 md:mx-4"},[t._v("資訊工程系")])]),t._v(" "),l("p",{staticClass:"m-2 text-sm md:text-lg"},[t._v("學士")]),t._v(" "),l("p",{staticClass:"m-2 text-sm md:text-lg"},[t._v("2019-2021")])]),t._v(" "),l("div",{staticClass:"flex justify-around"},[l("p",{staticClass:"m-2 text-sm md:text-lg"},[t._v("國立臺中科技大學"),l("br",{staticClass:"block md:hidden"}),l("span",{staticClass:"mx-0 md:mx-4"},[t._v("電算中心")])]),t._v(" "),l("p",{staticClass:"m-2 text-sm md:text-lg"},[t._v("工讀生")]),t._v(" "),l("p",{staticClass:"m-2 text-sm md:text-lg"},[t._v("2017-2019")])]),t._v(" "),l("div",{staticClass:"flex justify-around"},[l("p",{staticClass:"m-2 text-sm md:text-lg"},[t._v("博睿科技股份有限公司"),l("br",{staticClass:"block md:hidden"}),l("span",{staticClass:"mx-0 md:mx-4"})]),t._v(" "),l("p",{staticClass:"m-2 text-sm md:text-lg"},[t._v("後端工程師")]),t._v(" "),l("p",{staticClass:"m-2 text-sm md:text-lg"},[t._v("2021/05-現今")])])])])}],!1,null,null,null);e.default=component.exports},283:function(t,e,l){"use strict";l(276)},284:function(t,e,l){var r=l(51)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.container{\n  margin:0 auto;\n  min-height:100vh\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},287:function(t,e,l){"use strict";l.r(e);var r=l(2).a.extend({data:function(){return{darkMode:!1}},methods:{toggleDark:function(){this.darkMode=!this.darkMode}}}),n=(l(283),l(50)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container",class:{dark:t.darkMode}},[l("Title"),t._v(" "),l("Exp"),t._v(" "),l("Skill"),t._v(" "),l("Language"),t._v(" "),l("Works"),t._v(" "),l("ToggleDark",{attrs:{isDark:t.darkMode},on:{darkMode:t.toggleDark}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Title:l(275).default,Exp:l(282).default,Skill:l(278).default,Language:l(279).default,Works:l(280).default,ToggleDark:l(281).default})}}]);