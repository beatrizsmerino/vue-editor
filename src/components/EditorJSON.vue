<template>
	<div class="editor-json">
		<h2>
			Vue JSON editor
		</h2>
		<vue-json-editor
			v-model="json"
			:show-btns="true"
			:expanded-on-start="true"
			@json-change="onJsonChange"
		/>
	</div>
</template>

<script>
	import vueJsonEditor from 'vue-json-editor';

	export default {
		name: 'Editor',
		components: {
			vueJsonEditor
		},
		data() {
			return {
				json: {
					msg: 'demo of jsoneditor'
				}
			};
		},
		methods: {
			onJsonChange(value) {
				console.log('value:', value);
			}
		}
	};
</script>
