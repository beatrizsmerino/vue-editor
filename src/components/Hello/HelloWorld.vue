<template>
	<div class="greetings">
		<h1 class="green">
			{{ title }}
		</h1>
		<h3 v-html="subtitle" />
	</div>
</template>

<script>
	export default {
		"name": "HelloWorld",
		"props": {
			"title": {
				"type": String,
				"required": true,
			},
		},
		data() {
			return {
				"subtitle":
					'You’ve successfully created a project with <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> + <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.',
			};
		},
	};
</script>

<style lang="scss" scoped>
	.greetings {
		h1,
		h3 {
			text-align: center;

			@media (width >= 1024px) {
				text-align: left;
			}
		}

		h1 {
			position: relative;
			top: -1rem;
			font-size: 4.16rem;
			font-weight: 500;
		}

		h3 {
			font-size: 1.92rem;

			&:deep() {
				a {
					display: inline;
				}
			}
		}
	}
</style>
