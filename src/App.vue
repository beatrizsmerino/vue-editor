<template>
	<LayoutDefault />
</template>

<script>
	export default {
		"name": "App",
	};
</script>

<style lang="scss">
	// PARTIALS SASS
	// =================================================
	// Pattern 7-1
	// https://sass-guidelin.es/#the-7-1-pattern
	// 1. ABSTRACTS (settings that not generates code)
	// 2. BASE (standard styles for commonly used HTML elements)
	// 3. COMPONENTS (reusables micro modules of the widgets)
	// 4. LAYOUTS (global wireframe with the main parts)
	// 5. PAGES (styles for each page)
	// 6. THEMES (change the state of colors dark or light)
	// 7. VENDORS (external css code of the libraries and frameworks)

	// BASE
	//----------------------------------------------------------------------
	@import "@/assets/scss/base/base-reset";
	@import "@/assets/scss/base/base-global";

	// COMPONENTS
	//----------------------------------------------------------------------
	@import "@/assets/scss/components/components-page";
</style>
