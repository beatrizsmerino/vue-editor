<template>
	<div class="page__inner page__container">
		<Icon name="logoVue" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
	import HelloWorld from '@/components/HelloWorld';

	export default {
		name: 'Home',
		components: {
			HelloWorld
		}
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
