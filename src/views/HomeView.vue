<template>
	<TheWelcome />
</template>

<script>
	import TheWelcome from "@/components/Hello/TheWelcome.vue";

	export default {
		"name": "HomeView",
		"components": {
			TheWelcome,
		},
	};
</script>

<style lang="scss" scoped>
	.page-home {
		@media (width >= 1024px) {
			overflow-y: hidden;
		}
	}
</style>
