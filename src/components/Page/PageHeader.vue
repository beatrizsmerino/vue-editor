<template>
	<header class="page__header">
		<PageNav />
	</header>
</template>

<script>
	import PageNav from "@/components/Page/PageNav.vue";
	export default {
		"name": "PageHeader",
		"components": {
			PageNav,
		},
	};
</script>

<style lang="scss" scoped>
	.page {
		&__header {
			padding-top: 2rem;
			padding-bottom: 2rem;
		}
	}
</style>
