<template>
	<div id="app">
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

		// &__body {}

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
</style>
