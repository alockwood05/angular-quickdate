module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        files: {
          "spec/build/specs.js": ["spec/*.coffee"],
          "dist/ng-quickdate.js": ["src/*.coffee"]
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          "dist/ng-quickdate.min.js": "dist/ng-quickdate.js"
        }
      }
    },
    less: {
      compile: {
        files: {
          "dist/ng-quickdate.css": ["src/ng-quickdate.less"],
          "dist/ng-quickdate-default-theme.css": ["src/ng-quickdate-default-theme.less"],
          "dist/ng-quickdate-plus-default-theme.css": ["src/ng-quickdate.less", "src/ng-quickdate-default-theme.less"]
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.coffee', '**/*.less'],
        tasks: ['coffee', 'uglify', 'less'],
        options: {
          debounceDelay: 250,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['coffee', 'uglify', 'less', 'watch']);
};
