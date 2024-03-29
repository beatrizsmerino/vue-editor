<template>
	<header class="page__header">
		<PageNav />
	</header>
</template>

<script>
	import PageNav from "@/components/PageNav.vue";
	export default {
		"name": "PageHeader",
		"components": {
			PageNav,
		},
	};
</script>
