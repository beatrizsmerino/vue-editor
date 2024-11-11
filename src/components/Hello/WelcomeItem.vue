<template>
	<div class="welcome-item">
		<span class="welcome-item__icon">
			<slot name="icon" />
		</span>
		<div class="welcome-item__details">
			<h3 class="welcome-item__title">
				<slot name="heading" />
			</h3>
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.welcome-item {
		display: flex;
		position: relative;

		&:not(:first-child) {
			margin-top: 3.2rem;

			@media (width >= 1024px) {
				margin-top: 0;
			}
		}

		@media (width >= 1024px) {
			padding: 0.64rem 0 1.6rem calc(var(--section-gap) / 2);
		}

		&:before,
		&:after {
			@media (width >= 1024px) {
				content: " ";
				position: absolute;
				left: 2.6rem;
				height: calc(50% - 2.5rem);
				border-left: 0.1rem solid var(--color-border);
			}
		}

		&:before {
			@media (width >= 1024px) {
				bottom: calc(50% + 2.5rem);
			}
		}

		&:after {
			@media (width >= 1024px) {
				top: calc(50% + 2.5rem);
			}
		}

		&:first-of-type {
			&:before {
				@media (width >= 1024px) {
					display: none;
				}
			}
		}

		&:last-of-type {
			&:after {
				@media (width >= 1024px) {
					display: none;
				}
			}
		}

		&__icon {
			display: flex;
			width: 3.2rem;
			height: 3.2rem;
			color: var(--color-text);
			place-items: center;
			place-content: center;

			@media (width >= 1024px) {
				position: absolute;
				top: calc(50% - 2.5rem);
				left: 0;
				width: 5rem;
				height: 5rem;
				border: 0.1rem solid var(--color-border);
				border-radius: 0.8rem;
				background: var(--color-background);
			}

			&:deep(.icon) {
				width: 2rem;
				height: 2rem;
			}
		}

		&__details {
			flex: 1;
			margin-left: 1.6rem;

			&:deep() {
				p {
					font-size: 1.5rem;

					a {
						display: inline;
					}
				}
			}
		}

		&__title {
			margin-bottom: 0.64rem;
			color: var(--color-heading);
			font-size: 1.92rem;
			font-weight: 500;
			line-height: 1.6;
		}
	}
</style>
