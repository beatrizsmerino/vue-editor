<template>
	<div class="page-nav page__inner">
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
	</div>
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
					content: "|";
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
