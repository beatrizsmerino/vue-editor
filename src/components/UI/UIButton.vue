<template>
	<button class="button">
		<UIIcon
			:name="buttonIcon"
			:aria-label="buttonLabel"
			:title="buttonLabel"
		/>
		<span>{{ buttonText }}</span>
	</button>
</template>

<script>
	export default {
		"name": "UIButton",
		"props": {
			"buttonIcon": {
				"type": String,
				"required": true,
			},
			"buttonLabel": {
				"type": String,
				"required": true,
			},
			"buttonText": {
				"type": String,
				"required": true,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.button {
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

		&--line {
			border-color: $color-brand-2;
			background-color: transparent;
			color: $color-brand-2;

			&:hover {
				border-color: $color-brand-1;
				background-color: transparent;
				color: $color-brand-1;
			}

			&.button {
				&--dark {
					border-color: $color-brand-1;
					background-color: transparent;
					color: $color-brand-1;

					&:hover {
						border-color: $color-white;
						background-color: transparent;
						color: $color-white;
					}
				}
			}
		}

		&--solid {
			border-color: $color-brand-2;
			background-color: $color-brand-2;
			color: var(--color-background);

			&:hover {
				border-color: $color-brand-1;
				background-color: $color-brand-1;
			}

			&.button {
				&--dark {
					border-color: $color-brand-1;
					background-color: $color-brand-1;
					color: var(--color-background);

					&:hover {
						border-color: $color-white;
						background-color: $color-white;
					}
				}
			}
		}
	}
</style>
