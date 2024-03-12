import svgSymbolSpriteLoader from "svg-symbol-sprite-loader";

svgSymbolSpriteLoader({
	"useCache": import.meta.env.MODE === "production",
});
