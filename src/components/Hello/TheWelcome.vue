<script setup>
	import WelcomeItem from "@/components/Hello/WelcomeItem.vue";
</script>

<template>
	<div>
		<WelcomeItem>
			<template #icon>
				<UIIcon
					name="documentation"
					aria-label="Documentation"
					title="Documentation"
				/>
			</template>
			<template #heading>
				Documentation
			</template>
			<p>
				Vue’s
				<a
					href="https://vuejs.org/"
					target="_blank"
					rel="noopener"
				>
					official documentation
				</a>
				provides you with all information you need to get started.
			</p>
		</WelcomeItem>

		<WelcomeItem>
			<template #icon>
				<UIIcon
					name="tooling"
					aria-label="Tooling"
					title="Tooling"
				/>
			</template>
			<template #heading>
				Tooling
			</template>
			<p>
				This project is served and bundled with
				<a
					href="https://vitejs.dev/guide/features.html"
					target="_blank"
					rel="noopener"
				>
					Vite
				</a>
				. The recommended IDE setup is
				<a
					href="https://code.visualstudio.com/"
					target="_blank"
					rel="noopener"
				>
					VSCode
				</a>
				+
				<a
					href="https://github.com/johnsoncodehk/volar"
					target="_blank"
					rel="noopener"
				>
					Volar
				</a>
				. If you need to test your components and web pages, check out
				<a
					href="https://www.cypress.io/"
					target="_blank"
					rel="noopener"
				>
					Cypress
				</a>
				and
				<a
					href="https://on.cypress.io/component"
					target="_blank"
					rel="noopener"
				>
					Cypress Component Testing
				</a>
				.
				<br >
				More instructions are available in
				<code>README.md</code>
				.
			</p>
		</WelcomeItem>

		<WelcomeItem>
			<template #icon>
				<UIIcon
					name="ecosystem"
					aria-label="Ecosystem"
					title="Ecosystem"
				/>
			</template>
			<template #heading>
				Ecosystem
			</template>
			<p>
				Get official tools and libraries for your project:
				<a
					href="https://pinia.vuejs.org/"
					target="_blank"
					rel="noopener"
				>
					Pinia
				</a>
				,
				<a
					href="https://router.vuejs.org/"
					target="_blank"
					rel="noopener"
				>
					Vue Router
				</a>
				,
				<a
					href="https://test-utils.vuejs.org/"
					target="_blank"
					rel="noopener"
				>
					Vue Test Utils
				</a>
				, and
				<a
					href="https://github.com/vuejs/devtools"
					target="_blank"
					rel="noopener"
				>
					Vue Dev Tools
				</a>
				. If you need more resources, we suggest paying
				<a
					href="https://github.com/vuejs/awesome-vue"
					target="_blank"
					rel="noopener"
				>
					Awesome Vue
				</a>
				a visit.
			</p>
		</WelcomeItem>

		<WelcomeItem>
			<template #icon>
				<UIIcon
					name="community"
					aria-label="Community"
					title="Community"
				/>
			</template>
			<template #heading>
				Community
			</template>
			<p>
				Got stuck? Ask your question on
				<a
					href="https://chat.vuejs.org"
					target="_blank"
					rel="noopener"
				>
					Vue Land
				</a>
				, our official Discord server, or
				<a
					href="https://stackoverflow.com/questions/tagged/vue.js"
					target="_blank"
					rel="noopener"
				>
					StackOverflow
				</a>
				. You should also subscribe to
				<a
					href="https://news.vuejs.org"
					target="_blank"
					rel="noopener"
				>
					our mailing list
				</a>
				and follow the official
				<a
					href="https://twitter.com/vuejs"
					target="_blank"
					rel="noopener"
				>
					@vuejs
				</a>
				twitter account for latest news in the Vue world.
			</p>
		</WelcomeItem>

		<WelcomeItem>
			<template #icon>
				<UIIcon
					name="support"
					aria-label="Support"
					title="Support"
				/>
			</template>
			<template #heading>
				Support Vue
			</template>
			<p>
				As an independent project, Vue relies on community backing for its sustainability. You can help us by
				<a
					href="https://vuejs.org/sponsor/"
					target="_blank"
					rel="noopener"
				>
					becoming a sponsor
				</a>
				.
			</p>
		</WelcomeItem>
	</div>
</template>
