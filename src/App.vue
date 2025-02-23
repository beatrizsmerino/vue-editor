<template>
	<DefaultLayout />
</template>

<script>
	export default {
		"name": "App",
	};
</script>

<style lang="scss">
	// PARTIALS SASS
	// ===============================================================================

	// BASE
	// ----------------------------------------------------------------------
	@use "@/assets/scss/base/base-reset";
	@use "@/assets/scss/base/base-global";

	.page {
		@media (width >= 1024px) {
			overflow-y: hidden;
		}

		&__main {
			> * {
				@media (width >= 1024px) {
					overflow-y: scroll;
				}
			}
		}
	}
</style>
