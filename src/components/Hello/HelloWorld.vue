<template>
	<div class="greetings">
		<h1 class="green">
			{{ msg }}
		</h1>
		<h3>
			You’ve successfully created a project with
			<a
				href="https://vitejs.dev/"
				target="_blank"
				rel="noopener"
			>
				Vite
			</a>
			+
			<a
				href="https://vuejs.org/"
				target="_blank"
				rel="noopener"
			>
				Vue 3
			</a>
			.
		</h3>
	</div>
</template>

<script>
	export default {
		"name": "HelloWorld",
		"props": {
			"msg": {
				"type": String,
				"required": true,
			},
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

			a {
				padding-top: 0;
				padding-bottom: 0;
			}
		}
	}
</style>
