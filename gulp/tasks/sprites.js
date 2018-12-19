var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite');

var config = {
    shape: {
        id: {
            pseudo: '~'
        }
    },
    mode: {
        css: {
            dest: '.',
            bust: false,
            sprite: './img/svg/sprite.svg',
            dimensions: true,
            prefix: '',
            render: {
                css: {
                    dest: './styles/modules/_sprite.css',
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('sprite', function () {
    return gulp.src('./app/assets/img/svg/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/assets/'));
});
