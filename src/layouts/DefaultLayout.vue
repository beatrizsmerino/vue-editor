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
					const title = document.getElementsByTagName("title")[0];
					const body = document.getElementsByTagName("body")[0];

					from?.name && html.classList.remove("page", `page-${from.name.toLowerCase()}`);
					to?.name && html.classList.add("page", `page-${to.name.toLowerCase()}`);

					title.innerText = `${to.name} | Vue Editor`;

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
		--vt-c-white: #ffffff;
		--vt-c-black: #181818;
		--vt-c-green: hsl(160deg 100% 37% / 100%);
		--vt-c-green-light: hsl(160deg 100% 37% / 20%);
		--vt-c-indigo: #2c3e50;
		--vt-c-divider-light-2: rgb(60 60 60 / 12%);
		--vt-c-divider-dark-2: rgb(84 84 84 / 48%);
		--vt-c-text-dark-2: rgb(235 235 235 / 64%);

		// semantic color variables for this project
		--color-background: var(--vt-c-white);
		--color-border: var(--vt-c-divider-light-2);
		--color-heading: var(--vt-c-indigo);
		--color-text: var(--vt-c-indigo);
		--color-link: var(--vt-c-indigo);
		--color-button: var(--vt-c-indigo);
		--section-gap: 160px;

		@media (prefers-color-scheme: dark) {
			--color-background: var(--vt-c-black);
			--color-border: var(--vt-c-divider-dark-2);
			--color-heading: var(--vt-c-white);
			--color-text: var(--vt-c-text-dark-2);
			--color-link: var(--vt-c-white);
			--color-button: var(--vt-c-white);
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
			color: var(--color-heading);
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
			}
		}

		&__main {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding-top: 5rem;
			padding-bottom: 5rem;

			@media (width >= 1024px) {
				padding-top: 0;
				padding-bottom: 0;
			}
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
		color: var(--vt-c-green);
		text-decoration: none;
	}

	@media (hover: hover) {
		a:hover {
			background-color: var(--vt-c-green-light);
			color: var(--vt-c-green);
		}
	}
</style>
