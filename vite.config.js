import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import eslint from "vite-plugin-eslint";
import stylelint from "vite-plugin-stylelint";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
	"base": process.env.NODE_ENV === "production" ? "/vue-editor/" : "/",
	"server": {
		"port": 3000,
	},
	"plugins": [
		vue(),
		eslint({
			"fix": true,
		}),
		stylelint({
			"fix": true,
		}),
		createSvgIconsPlugin({
			"iconDirs": [
				fileURLToPath(new URL("src/assets/images/icons/svg", import.meta.url)),
			],
			"symbolId": "icon-[dir][name]",
		}),
	],
	"resolve": {
		"alias": {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
		"extensions": [
			".mjs",
			".js",
			".ts",
			".jsx",
			".tsx",
			".json",
			".vue",
		],
	},
	"css": {
		"preprocessorOptions": {
			"scss": {
				"additionalData": `
					@use "sass:color";
					@import "@/assets/scss/styles";
				`,
			},
		},
	},
});
