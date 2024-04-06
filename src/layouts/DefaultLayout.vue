<template>
	<div
		id="app"
		class="page__app"
	>
		<PageHeader />
		<main class="page__main">
			<router-view />
		</main>
	</div>
</template>

<script>
	import PageHeader from "@/components/Page/PageHeader.vue";

	export default {
		"name": "DefaultLayout",
		"components": {
			PageHeader,
		},
		"watch": {
			"$route": {
				handler(to, from) {
					const html = document.getElementsByTagName("html")[0];
					const body = document.getElementsByTagName("body")[0];

					from?.name && html.classList.remove("page", `page-${from.name.toLowerCase()}`);
					to?.name && html.classList.add("page", `page-${to.name.toLowerCase()}`);

					body.classList.add("page__body");
				},
				"immediate": true,
			},
		},
	};
</script>

<style lang="scss">
	:root {
		// color palette from <https://github.com/vuejs/theme>
		--vt-c-white: $color-white;
		--vt-c-black: $color-dark;
		--vt-c-indigo: $color-brand-vue-2;
		--vt-c-divider-light-2: rgb($color-metal / 12%);
		--vt-c-divider-dark-2: rgb($color-gray-dark / 48%);
		--vt-c-text-light-1: var(--vt-c-indigo);
		--vt-c-text-dark-1: var(--vt-c-white);
		--vt-c-text-dark-2: rgb($color-light / 64%);

		// semantic color variables for this project
		--color-background: var(--vt-c-white);
		--color-border: var(--vt-c-divider-light-2);
		--color-heading: var(--vt-c-text-light-1);
		--color-text: var(--vt-c-text-light-1);
		--section-gap: 160px;

		@media (prefers-color-scheme: dark) {
			--color-background: var(--vt-c-black);
			--color-border: var(--vt-c-divider-dark-2);
			--color-heading: var(--vt-c-text-dark-1);
			--color-text: var(--vt-c-text-dark-2);
		}
	}

	.page {
		color: $color-brand-2;
		font-family: Avenir, Helvetica, Arial, sans-serif;

		&__container {
			width: 100%;
			max-width: 140rem;
			margin: 0 auto;
		}

		&__inner {
			position: relative;
			padding-right: 3rem;
			padding-left: 3rem;

			@include media("md") {
				padding-right: 2rem;
				padding-left: 2rem;
			}
		}

		&__title {
			margin-bottom: $font-size--h1;
			color: $color-white;
			font-size: $font-size--h1;
			line-height: $font-size--h1;
			text-align: center;
		}

		&__subtitle {
			margin-bottom: $font-size--h3;
			font-size: $font-size--h3;
			line-height: $font-size--h3;
			text-align: center;
		}

		&__body {
			min-height: 100vh;
			transition:
				color 0.5s,
				background-color 0.5s;
			background: var(--color-background);
			color: var(--color-text);

			@media (width >= 1024px) {
				display: flex;
				place-items: center;
			}
		}

		&__app {
			max-width: 1280px;
			margin: 0 auto;
			padding: 3.2rem;
			font-weight: normal;

			@media (width >= 1024px) {
				display: grid;
				grid-template-columns: 1fr 1fr;
				padding: 0 3.2rem;
			}
		}

		&__main {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding-top: 5rem;
			padding-bottom: 5rem;
		}

		&__section {
			display: flex;
			justify-content: center;
		}

		&__article {
			&:not(:last-child) {
				margin-bottom: 4rem;
			}
		}
	}

	a,
	.green {
		padding: 0.3rem;
		transition: 0.4s;
		color: $color-brand-vue-1;
		text-decoration: none;
	}

	@media (hover: hover) {
		a:hover {
			background-color: rgba($color-brand-vue-1, 0.2);
			color: $color-brand-vue-1;
		}
	}
</style>
