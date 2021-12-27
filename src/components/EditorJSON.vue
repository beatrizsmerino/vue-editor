<template>
	<div class="editor-json">
		<h2>Vue JSON editor</h2>
		<div class="editor-json__content">
			<vue-json-editor
				v-model="json"
				:show-btns="false"
				:expanded-on-start="true"
				@json-change="onJsonChange"
			/>
			<div class="editor-json__actions">
				<button
					v-clipboard:copy="JSON.stringify(json)"
					v-clipboard:success="onCopy"
					v-clipboard:error="onError"
					type="button"
					class="editor-json__button editor-json__button-copy"
				>
					Copy
				</button>
				<button
					class="editor-json__button editor-json__button-save"
					@click="onSave"
				>
					Save
				</button>
			</div>
		</div>
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
		created() {
			this.getPikachu();
		},
		methods: {
			onJsonChange(value) {
				console.log('value:', value);
			},
			getPikachu() {
				const url = 'https://pokeapi.co/api/v2/pokemon/pikachu';
				fetch(url).
					then(res => res.json()).
					then(data => {
						this.json = data;
					});
			},
			onCopy() {
				alert('Copied JSON to the clipboard');
			},
			onError(e) {
				alert('Failed to copy JSON to the clipboard');
				console.log(e);
			},
			onSave() {
				localStorage.setItem('editor-json', JSON.stringify(this.json));
			}
		}
	};
</script>

<style lang="scss" scoped>
	.editor-json {
		&__actions {
			display: flex;
			justify-content: flex-end;
			margin-top: 1rem;

			> * {
				&:not(:last-child) {
					margin-right: 1rem;
				}
			}
		}

		&__button {
			padding: 0.5rem 1rem;
			border: 0.1rem solid transparent;
			border-radius: 0.3rem;
			font-size: 1rem;
			cursor: pointer;
		}

		&__button-copy {
			border-color: $color-brand-2;
			background-color: $color-white;
			color: $color-brand-2;

			&:hover {
				background-color: $color-brand-2;
				color: $color-white;
			}
		}

		&__button-save {
			border-color: $color-brand-2;
			background-color: $color-brand-2;
			color: $color-white;

			&:hover {
				border-color: $color-brand-1;
				background-color: $color-brand-1;
			}
		}

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
