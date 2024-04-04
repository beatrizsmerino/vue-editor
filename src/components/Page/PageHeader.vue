<template>
	<header class="page-header">
		<UIIcon
			name="logo-vue"
			aria-label="Vue logo"
			title="Vue logo"
		/>
		<div class="page-header__wrapper">
			<HelloWorld msg="You did it!" />

			<PageNav />
		</div>
	</header>
</template>

<script>
	import HelloWorld from "@/components/Hello/HelloWorld.vue";
	import PageNav from "@/components/Page/PageNav.vue";

	export default {
		"name": "PageHeader",
		"components": {
			HelloWorld,
			PageNav,
		},
	};
</script>

<style lang="scss" scoped>
	.page-header {
		max-height: 100vh;
		line-height: 1.5;

		@media (width >= 1024px) {
			display: flex;
			padding-right: calc(var(--section-gap) / 2);
			place-items: center;
		}

		.icon-logo-vue {
			width: 12.5rem;
			height: 12.5rem;
			margin: 0 auto 3.2rem;

			@media (width >= 1024px) {
				margin: 0 3.2rem 0 0;
			}
		}

		&__wrapper {
			@media (width >= 1024px) {
				display: flex;
				flex-wrap: wrap;
				width: calc(100% - 12.5rem - 3.2rem);
				place-items: flex-start;
			}
		}
	}
</style>
