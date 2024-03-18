<template>
	<div class="editor-json theme--brand-2">
		<h2 class="page__subtitle">
			JSON editor
		</h2>
		<div class="editor-json__content">
			<JsonEditorVue
				:model-value="json"
				class="json-editor-vue jse-theme-dark"
				mode="text"
				:ask-to-format="true"
				:read-only="false"
				:indentation="4"
				:on-change="updateData"
			/>
			<div class="editor-json__actions">
				<button
					v-clipboard:copy="copyData"
					v-clipboard:success="copyDataSuccess"
					v-clipboard:error="copyDataError"
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
					@click="saveData"
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
	import "vanilla-jsoneditor/themes/jse-theme-dark.css";
	import JsonEditorVue from "json-editor-vue";

	export default {
		"name": "EditorJSON",
		"components": {
			JsonEditorVue,
		},
		"props": {
			"apiUrl": {
				"type": String,
				"required": true,
			},
		},
		data() {
			return {
				"json": {
					"msg": "demo of jsoneditor",
				},
			};
		},
		created() {
			this.getData(this.apiUrl);
		},
		"methods": {
			getData(apiUrl) {
				fetch(apiUrl).
					then(res => res.json()).
					then(data => {
						this.json = data;
					});
			},
			updateData(value) {
				console.log("value:", value);
			},
			saveData() {
				localStorage.setItem("editor-json", JSON.stringify(this.json));
			},
			copyData() {
				JSON.stringify(this.json);
			},
			copyDataSuccess() {
				alert("Copied JSON to the clipboard");
			},
			copyDataError(error) {
				alert("Failed to copy JSON to the clipboard");
				console.log(error);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.editor-json {
		&__content {
			:deep(.jse-theme-dark) {
				--jse-theme-color: #{$color-brand-2};
				--jse-theme-color-highlight: #{$color-brand-1};
			}

			:deep(.jse-modal .svelte-select) {
				--item-is-active-bg: #{$color-brand-1};
			}

			:deep(.jse-modal .svelte-select.focused) {
				border-color: #{$color-brand-1} !important;
			}

			:deep(.json-editor-vue) {
				display: flex;
				flex: 1;
				height: 50rem;

				a,
				span {
					display: initial;
				}
			}
		}

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
			}
		}
	}
</style>
