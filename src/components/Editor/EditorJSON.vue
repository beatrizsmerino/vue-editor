<template>
	<div class="editor-json">
		<h2 class="page__subtitle">
			JSON editor
		</h2>
		<div class="editor-json__content">
			<JsonEditorVue
				class="json-editor-vue jse-theme-dark"
				mode="text"
				:ask-to-format="true"
				:read-only="false"
				:indentation="4"
				:model-value="json"
				@update:modelValue="updateData"
			/>
			<div class="editor-json__actions">
				<UIButton
					v-clipboard="copyData"
					v-clipboard:success="copyDataSuccess"
					v-clipboard:error="copyDataError"
					class="button--line button--dark"
					type="button"
					button-text="Copy"
					button-icon="copy"
					button-label="Copy json"
				/>
				<UIButton
					class="button--solid button--dark"
					type="button"
					button-text="Save"
					button-icon="save"
					button-label="Save json"
					@click="saveData"
				/>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from "vue";
	import "vanilla-jsoneditor/themes/jse-theme-dark.css";
	import JsonEditorVue from "json-editor-vue";
	import { Clipboard } from "v-clipboard";

	const props = defineProps({
		"apiUrl": {
			"type": String,
			"required": true,
		},
	});

	const json = ref({
		"msg": "demo of jsoneditor",
	});

	const getData = async apiUrl => {
		try {
			const response = await fetch(apiUrl);
			const data = await response.json();
			json.value = data;
		} catch (error) {
			alert("Failed to fetch data");
			console.error("Failed to fetch data:", error);
		}
	};

	const updateData = value => {
		try {
			const valueParsed = typeof value === "string" ? JSON.parse(value) : value;
			json.value = valueParsed;
		} catch (error) {
			alert("Error parsing updated JSON");
			console.error("Error parsing updated JSON:", error);
		}
	};

	const saveData = () => {
		localStorage.setItem("editor-json", JSON.stringify(json.value));
	};

	const copyData = () => {
		Clipboard.copy(json.value);
	};

	const copyDataSuccess = () => {
		alert("Copied JSON to the clipboard");
	};

	const copyDataError = error => {
		alert("Failed to copy JSON to the clipboard");
		console.error("Failed to copy JSON to the clipboard:", error);
	};

	onMounted(() => {
		getData(props.apiUrl);
	});
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
	}
</style>
