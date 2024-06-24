<template>
	<i
		class="icon"
		:class="`${iconId}`"
		:aria-label="ariaLabel"
		:title="title"
	>
		<svg class="icon__svg">
			<use
				class="icon__use"
				:xlink:href="`#${iconId}`"
			/>
		</svg>
	</i>
</template>

<script>
	export default {
		"name": "UIIcon",
		"props": {
			"name": {
				"type": String,
				"required": true,
			},
			"ariaLabel": {
				"type": String,
				"default": "",
			},
			"title": {
				"type": String,
				"default": "",
			},
		},
		"computed": {
			iconId() {
				return `icon-${this.name}`;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.8rem;
		height: 1.8rem;

		&__svg {
			display: inline-block;
			width: 100%;
			height: 100%;
			fill: currentcolor;
		}
	}
</style>
