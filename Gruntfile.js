module.exports = function(grunt) {
  grunt.initConfig({
    artoo: {
      dev: {
        options: {

        },
        src: 'js/ad-size-detect.js',
        dest: 'build/bookmarklet.min.js'
      }
    }
  });

  grunt.registerTask('default', ['artoo']);
  grunt.loadNpmTasks('grunt-artoo');

};
