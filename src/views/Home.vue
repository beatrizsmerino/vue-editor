<template>
	<div class="home">
		<Icon name="logoVue" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>

	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue';

	export default {
		name: 'Home',
		components: {
			HelloWorld
		}
	};
</script>

<style lang="scss" scoped>
	.home {
		.icon-logo-vue {
			width: 150px;
			height: 150px;
			margin: 0 auto;
		}
	}
</style>
