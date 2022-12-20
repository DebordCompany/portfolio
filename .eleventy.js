module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/js/");
    eleventyConfig.addWatchTarget("./src/js/");
    eleventyConfig.addPassthroughCopy("./src/media/");
    eleventyConfig.addWatchTarget("./src/media/");
    eleventyConfig.addPassthroughCopy("./src/pages/");
    eleventyConfig.addWatchTarget("./src/pages/");
    eleventyConfig.addPassthroughCopy("./src/tailwind/");
    eleventyConfig.addWatchTarget("./src/tailwind/");
    eleventyConfig.addPassthroughCopy("./src/form.php");
    eleventyConfig.addWatchTarget("./src/form.php");
    
    return{
        dir: {
            input: "src",
            output: "dist"
        },
    };
};