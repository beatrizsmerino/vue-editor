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
