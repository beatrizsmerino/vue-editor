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

<style lang="scss" scoped>
	.editor-json {
		::v-deep {
			.jsoneditor {
				border-color: mix($color-black, $color-white, 10%) !important;

				.jsoneditor-menu {
					border-bottom-color: mix($color-black, $color-white, 10%);
					background-color: mix($color-black, $color-white, 10%);

					button {
						filter: brightness(0.4);

						&:disabled {
							filter: brightness(0.6);
						}
					}

					.jsoneditor-modes {
						button {
							color: $color-carbon;
						}
					}

					.jsoneditor-menu {
						button {
							filter: none;
						}
					}
				}
			}

			.jsoneditor-vue {
				height: 50vh;
			}

			.jsoneditor-poweredBy {
				display: none;
			}

			.jsoneditor-contextmenu {
				ul {
					li {
						background-color: $color-white !important;

						.jsoneditor-selected {
							background-color: $color-brand-1 !important;
							color: $color-white !important;
						}
					}
				}
			}

			.jsoneditor-btns {
				display: flex;
				justify-content: flex-end;
			}

			.json-save-btn {
				padding: 0.5rem 1rem;
				background-color: $color-brand-2;
				color: $color-white;
				font-size: 1.2rem;

				&:hover {
					background-color: $color-brand-1;
				}
			}
		}
	}
</style>
