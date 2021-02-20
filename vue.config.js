module.exports = {
    publicPath: '/',
    rules: {
        "vue/comment-directive": 0
    },
    css: {
        loaderOptions: {
          sass: {
            additionalData: `
              @import "@/sass/_variables.scss";
            `
          }
        }
    }
}