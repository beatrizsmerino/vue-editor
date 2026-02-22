import{_ as c,o,c as i,a as n,r as a,F as m,b as f,d as u,w as r,e as g,f as p,g as b,t as v,h as k}from"./index-yqVaM1EY.js";const w={},y={class:"welcome-item"},j={class:"welcome-item__icon"},V={class:"welcome-item__details"},T={class:"welcome-item__title"};function $(t,s){return o(),i("div",y,[n("span",j,[a(t.$slots,"icon",{},void 0)]),n("div",V,[n("h3",T,[a(t.$slots,"heading",{},void 0)]),a(t.$slots,"default",{},void 0)])])}const x=c(w,[["render",$],["__scopeId","data-v-ba2722d5"]]),I={class:"the-welcome"},C=["innerHTML"],D={__name:"TheWelcome",setup(t){const s=g([{title:"Documentation",icon:"documentation",text:`
				Vue’s
				<a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
				provides you with all information you need to get started.
			`},{title:"Tooling",icon:"tooling",text:`
				This project is served and bundled with
				<a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The
				recommended IDE setup is
				<a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
				<a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If
				you need to test your components and web pages, check out
				<a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
				<a href="https://on.cypress.io/component" target="_blank" rel="noopener"
				>Cypress Component Testing</a
				>.
				<br />
				More instructions are available in <code>README.md</code>.
			`},{title:"Ecosystem",icon:"ecosystem",text:`
				Get official tools and libraries for your project:
				<a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
				<a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
				<a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
				<a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If
				you need more resources, we suggest paying
				<a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
				a visit.
			`},{title:"Community",icon:"community",text:`
				Got stuck? Ask your question on
				<a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official
				Discord server, or
				<a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener"
				>StackOverflow</a
				>. You should also subscribe to
				<a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and follow
				the official
				<a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
				twitter account for latest news in the Vue world.
			`},{title:"Support Vue",icon:"support",text:`
				As an independent project, Vue relies on community backing for its sustainability. You can help
				us by
				<a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
			`}]);return(d,h)=>{const l=p("UIIcon");return o(),i("div",I,[(o(!0),i(m,null,f(s.value,e=>(o(),u(x,{key:e.icon},{icon:r(()=>[k(l,{name:e.icon,"aria-label":e.title,title:e.title},null,8,["name","aria-label","title"])]),heading:r(()=>[b(v(e.title),1)]),default:r(()=>[n("p",{innerHTML:e.text},null,8,C)]),_:2},1024))),128))])}}},E={name:"HomeView",components:{TheWelcome:D}};function S(t,s,d,h,l,e){const _=p("TheWelcome");return o(),u(_)}const A=c(E,[["render",S]]);export{A as default};
