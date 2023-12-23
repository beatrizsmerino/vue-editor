<template>
	<div class="editor-json theme--brand-2">
		<h2 class="page__subtitle">
			Vue JSON editor
		</h2>
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
					<Icon
						name="copy"
						aria-label="Copy json"
						title="Copy json"
					/>
					<span>Copy</span>
				</button>
				<button
					class="editor-json__button editor-json__button-save"
					@click="onSave"
				>
					<Icon
						name="save"
						aria-label="Save json"
						title="Save json"
					/>
					<span>Save</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import vueJsonEditor from "vue-json-editor";

	export default {
		"name": "Editor",
		"components": {
			vueJsonEditor,
		},
		data() {
			return {
				"json": {
					"msg": "demo of jsoneditor",
				},
			};
		},
		created() {
			this.getPikachu();
		},
		"methods": {
			onJsonChange(value) {
				/* eslint-disable no-alert, no-console, no-debugger */
				console.log("value:", value);
				/* eslint-enable no-alert, no-console */
			},
			getPikachu() {
				const url = "https://pokeapi.co/api/v2/pokemon/pikachu";
				fetch(url).
					then(res => res.json()).
					then(data => {
						this.json = data;
					});
			},
			onCopy() {
				/* eslint-disable no-alert, no-console, no-debugger */
				alert("Copied JSON to the clipboard");
				/* eslint-enable no-alert, no-console */
			},
			onError(e) {
				/* eslint-disable no-alert, no-console, no-debugger */
				alert("Failed to copy JSON to the clipboard");
				console.log(e);
				/* eslint-enable no-alert, no-console */
			},
			onSave() {
				localStorage.setItem("editor-json", JSON.stringify(this.json));
			},
		},
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
			display: flex;
			align-items: center;
			padding: 0.5rem 1.5rem;
			border: 0.2rem solid transparent;
			border-radius: 0.3rem;
			font-size: 1.6rem;
			font-weight: bold;
			cursor: pointer;

			> * {
				&:not(:last-child) {
					margin-right: 0.5rem;
				}
			}
		}

		:deep(.jsoneditor-vue) {
			height: 50vh;
		}

		:deep(.jsoneditor-poweredBy) {
			display: none;
		}

		:deep(.jsoneditor-btns) {
			display: flex;
			justify-content: flex-end;
		}

		:deep(.json-save-btn) {
			padding: 0.5rem 1rem;
			font-size: 1.2rem;
		}

		:deep(.jsoneditor-contextmenu),
		:deep(.jsoneditor-frame) {
			button {
				filter: none !important;
			}
		}

		&.theme {
			&--light {
				.editor-json {
					&__button-copy {
						border-color: color.mix($color-black, $color-white, 20%);
						background-color: $color-white;
						color: color.mix($color-black, $color-white, 20%);

						&:hover {
							border-color: color.mix($color-black, $color-white, 30%);
							background-color: color.mix($color-black, $color-white, 30%);
							color: $color-white;
						}
					}

					&__button-save {
						border-color: color.mix($color-black, $color-white, 20%);
						background-color: color.mix($color-black, $color-white, 20%);
						color: $color-white;

						&:hover {
							border-color: color.mix($color-black, $color-white, 30%);
							background-color: color.mix($color-black, $color-white, 30%);
						}
					}
				}

				:deep(.jsoneditor) {
					border-color: color.mix($color-black, $color-white, 10%) !important;
				}

				:deep(.jsoneditor-menu) {
					border-bottom-color: color.mix($color-black, $color-white, 10%);
					background-color: color.mix($color-black, $color-white, 10%);

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
				}

				:deep(.jsoneditor-contextmenu) {
					ul {
						li {
							background-color: $color-white !important;

							.jsoneditor-selected {
								background-color: color.mix($color-black, $color-white, 10%) !important;
								color: $color-carbon !important;
							}
						}
					}
				}

				:deep(.json-save-btn) {
					background-color: $color-carbon;
					color: $color-white;

					&:hover {
						background-color: color.mix($color-black, $color-white, 10%);
					}
				}
			}

			&--brand-1 {
				.editor-json {
					&__button-copy {
						border-color: $color-brand-1;
						background-color: $color-white;
						color: $color-brand-1;

						&:hover {
							border-color: $color-brand-2;
							background-color: $color-white;
							color: $color-brand-2;
						}
					}

					&__button-save {
						border-color: $color-brand-1;
						background-color: $color-brand-1;
						color: $color-white;

						&:hover {
							border-color: $color-brand-2;
							background-color: $color-brand-2;
						}
					}
				}

				:deep(.jsoneditor) {
					border-color: $color-brand-1;
				}

				:deep(.jsoneditor-menu) {
					border-bottom-color: $color-brand-1;
					background-color: $color-brand-1;

					button {
						filter: brightness(0) saturate(100%) invert(100%);

						&:disabled {
							filter: brightness(0) saturate(100%) invert(100%);
						}
					}
				}

				:deep(.jsoneditor-contextmenu) {
					ul {
						li {
							background-color: $color-white !important;

							button {
								color: $color-carbon !important;

								&.jsoneditor-selected {
									background-color: $color-brand-1 !important;
									color: $color-white !important;
								}
							}
						}
					}
				}
			}

			&--brand-2 {
				.editor-json {
					&__button-copy {
						border-color: $color-brand-2;
						background-color: $color-white;
						color: $color-brand-2;

						&:hover {
							border-color: $color-brand-1;
							background-color: $color-white;
							color: $color-brand-1;
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
				}

				:deep(.jsoneditor) {
					border-color: $color-brand-2;
				}

				:deep(.jsoneditor-menu) {
					border-bottom-color: $color-brand-2;
					background-color: $color-brand-2;

					button {
						filter: brightness(0) saturate(100%) invert(100%);

						&:disabled {
							filter: brightness(0) saturate(100%) invert(100%);
						}
					}
				}

				:deep(.jsoneditor-contextmenu) {
					ul {
						li {
							background-color: $color-white !important;

							button {
								color: $color-carbon !important;

								&.jsoneditor-selected {
									background-color: $color-brand-2 !important;
									color: $color-white !important;
								}
							}
						}
					}
				}

				:deep(.json-save-btn) {
					background-color: $color-brand-2;
					color: $color-white;

					&:hover {
						background-color: $color-brand-1;
					}
				}
			}
		}
	}
</style>
