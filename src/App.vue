<template>
	<div id="app">
		<Nav/>
		<router-view />
	</div>
</template>

<script>
	import Nav from '@/components/Nav';
	export default {
		name: 'App',
		components: {
			Nav
		}
	};
</script>

<style lang="scss">
	#app {
		color: $color-brand-2;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
	}

	.nav {
		padding: 30px;

		&__link {
			color: $color-brand-2;
			font-weight: bold;

			&.router-link-exact-active {
				color: $color-brand-1;
			}
		}
	}
</style>
