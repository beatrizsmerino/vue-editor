<template>
	<div class="page__inner page__container">
		<h1 class="page__title">
			Editors page
		</h1>
		<EditorJSON api-url="https://pokeapi.co/api/v2/pokemon/pikachu" />
	</div>
</template>

<script>
	import EditorJSON from "@/components/Editor/EditorJSON.vue";

	export default {
		"name": "EditorsView",
		"components": {
			EditorJSON,
		},
	};
</script>
