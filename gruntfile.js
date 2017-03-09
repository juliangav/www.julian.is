module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        sourceMap: false,
      },
      my_target: {
        files: {
          'js/production.min.js': ['js/plugins.js', 'js/main.js'],
          'local-hubl-server/work/hubthemes/vast/custom/system/js/production.min.js': ['js/plugins.js', 'js/main.js']
        }
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['*.scss', 'css/**/*.scss', 'css/**/**/*.scss'],
        tasks: ['sass'],
        //tasks: ['sass','criticalcss'],
        options: {
          spawn: false,
        }
      },
      html: {
        files: ['*.html'],
      }
    },
    sass: {
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'style.css': 'style.scss',
          'local-hubl-server/work/hubthemes/vast/custom/system/css/style.css': 'style.scss'
        }
      }
    },
    // criticalcss: {
    //     dist: {
    //         options: {
    //             url: "http://127.0.0.1:4000/",
    //             width: 1440,
    //             height: 750,
    //             outputfile: "critical.css",
    //             filename: "style.css", // Using path.resolve( path.join( ... ) ) is a good idea here
    //             buffer: 800*1024,
    //             ignoreConsole: false
    //         }
    //     }
    // },
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-criticalcss');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['uglify', 'sass', 'watch','criticalcss']);

};
