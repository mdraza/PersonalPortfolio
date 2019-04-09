module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            combine: {
                files: {
                    'css/main.min.css' : ['css/bootstrap.min.css', 'css/magnific-popup.css', 'css/owl.carousel.min.css', 'css/owl.theme.default.min.css', 'css/style.css']
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'js/main.min.js' : ['js/script.js', 'js/smooth-scroll.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['cssmin', 'uglify']);
};
