<template>
	<header class="page-header">
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
	.page-header {
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
</style>
