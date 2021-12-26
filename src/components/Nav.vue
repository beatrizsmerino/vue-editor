<template>
	<div class="nav">
		<ul class="nav__list">
			<li class="nav__item">
				<router-link
					to="/"
					class="nav__link"
				>
					Home
				</router-link>
			</li>
			<li class="nav__item">
				<router-link
					to="/about"
					class="nav__link"
				>
					About
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Nav'
	};
</script>

<style lang="scss" scoped>
	.nav {
		display: flex;
		justify-content: center;
		padding: 30px;

		&__list {
			display: flex;
			margin: 0;
			padding: 0;
			list-style: none;
		}

		&__item {
			display: flex;
			align-items: center;
			justify-content: center;

			&:not(:last-child) {
				&:after {
					content: '|';
					display: inline-block;
					padding: 0 1rem;
				}
			}
		}

		&__link {
			color: $color-brand-2;
			font-weight: bold;

			&.router-link-exact-active {
				color: $color-brand-1;
			}
		}
	}
</style>
