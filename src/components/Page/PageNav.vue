<template>
	<nav class="page-nav page__inner">
		<ul class="page-nav__list">
			<li
				v-for="(item, index) in navList"
				:key="index"
				class="page-nav__item"
			>
				<router-link
					:to="item.path"
					class="page-nav__link"
				>
					{{ item.name }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		"name": "PageNav",
		data() {
			return {
				"navList": [
					{
						"name": "Home",
						"path": "/",
					},
					{
						"name": "About",
						"path": "/about",
					},
					{
						"name": "Editors",
						"path": "/editors",
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.page-nav {
		display: flex;
		justify-content: center;
		width: 100%;
		margin-top: 3.2rem;
		font-size: 1.2rem;

		@media (width >= 1024px) {
			justify-content: flex-start;
			margin-top: 1.6rem;
			margin-left: -1.6rem;
			padding: 1.6rem 0;
			font-size: 1.6rem;
		}

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
			border-left: 0.1rem solid var(--color-border);

			&:first-of-type {
				border: 0;
			}
		}

		&__link {
			display: inline-block;
			padding: 0 1.6rem;
			font-size: 1.6rem;
			user-select: none;

			&.router-link-exact-active {
				color: var(--color-link);

				&:hover {
					background-color: transparent;
				}
			}
		}
	}
</style>
