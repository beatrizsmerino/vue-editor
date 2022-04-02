<template>
	<div class="page__inner page__container">
		<h1 class="page__title">
			Editors page
		</h1>
		<EditorJSON />
	</div>
</template>

<script>
	import EditorJSON from '@/components/EditorJSON';

	export default {
		name: 'Editors',
		components: {
			EditorJSON
		}
	};
</script>
