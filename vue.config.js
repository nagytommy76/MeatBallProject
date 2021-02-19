module.exports = {
    publicPath: '/',
    rules: {
        "vue/comment-directive": 0
    },
    css: {
        loaderOptions: {
          sass: {
            data: `
              @import "@/sass/_variables.scss";
            `
          }
        }
    }
}