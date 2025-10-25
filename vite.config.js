import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
	"base": process.env.NODE_ENV === "production" ? "/vue-editor/" : "/",
	"server": {
		"port": 3000,
	},
	"plugins": [
		vue(),
		createSvgIconsPlugin({
			"iconDirs": [
				fileURLToPath(new URL("src/assets/icons", import.meta.url)),
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
			".cjs",
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
					@use "@/assets/scss/styles.scss" as *;
				`,
			},
		},
	},
});
