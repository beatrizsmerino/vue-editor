import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
	"plugins": [
		vue(),
	],
	"resolve": {
		"alias": {
			"@": path.resolve(path.dirname(new URL(import.meta.url).pathname), "./src"),
		},
	},
});
