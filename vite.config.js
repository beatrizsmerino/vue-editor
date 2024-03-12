import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
	"base": process.env.NODE_ENV === "production" ? "/vue-editor/" : "/",
	"plugins": [
		vue(),
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
