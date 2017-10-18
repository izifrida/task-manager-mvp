module.exports = function() {
    return {
        sources: {
            index: 'src/index.html',
            scripts: 'src/app/**/*.js',
            stylesheets: [
                'src/assets/style/**/*.scss'
            ],
            images: 'src/assets/images/**/*',
            templates: 'src/app/**/*.template.html',
            lib: 'src/assets/libs/**/*.+(js|css)',
        },
        dev: {
            index: 'dev',
            scripts: 'dev/app',
            stylesheets: 'dev/assets/stylesheets',
            images: 'dev/assets/images',
            templates: 'dev/app',
            lib: 'dev/assets/libs',
            vendors: 'dev/assets/vendor'
        },
        prod: {
            index: 'prod',
            scripts: 'prod/app',
            stylesheets: 'prod/assets/stylesheets',
            images: 'prod/assets/images',
            templates: 'prod/app',
            lib: 'prod/assets/libs',
            vendors: 'prod/assets/vendor'
        },
    };
};