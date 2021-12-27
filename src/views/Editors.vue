<template>
	<div class="editors">
		<h1>Editors page</h1>
		<EditorJSON />
	</div>
</template>

<script>

	// @ is an alias to /src
	import EditorJSON from '@/components/EditorJSON.vue';

	export default {
		name: 'Editors',
		components: {
			EditorJSON
		}
	};
</script>
