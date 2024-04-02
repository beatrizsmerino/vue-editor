<template>
	<div id="app">
		<PageHeader />
		<main class="page__main">
			<router-view />
		</main>
	</div>
</template>

<script>
	import PageHeader from "@/components/Page/PageHeader.vue";

	export default {
		"name": "LayoutDefault",
		"components": {
			PageHeader,
		},
		"watch": {
			"$route": {
				handler(to, from) {
					const html = document.getElementsByTagName("html")[0];
					const body = document.getElementsByTagName("body")[0];

					from?.name && html.classList.remove("page", `page-${from.name.toLowerCase()}`);
					to?.name && html.classList.add("page", `page-${to.name.toLowerCase()}`);

					body.classList.add("page__body");
				},
				"immediate": true,
			},
		},
	};
</script>

<style lang="scss"></style>
