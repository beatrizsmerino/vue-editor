<template>
	<div class="page__inner page__container">
		<UIIcon
			name="logo-vue"
			aria-label="Vue logo"
			title="Vue logo"
		/>
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
	import HelloWorld from "@/components/Hello/HelloWorld.vue";

	export default {
		"name": "Home",
		"components": {
			HelloWorld,
		},
	};
</script>

<style lang="scss" scoped>
	.page-home {
		.icon-logo-vue {
			width: 15rem;
			height: 15rem;
			margin: 0 auto 3rem;
		}
	}
</style>
