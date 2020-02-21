module.exports = (function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");

    return {

        dir: {
            output: "_site",
            input: "content"
		},

    };

});

