module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['*.js']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: '*.css'
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: '*.html'
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false                        
      },
      iles: {
        src: './index.html',
        dest: 'dist/index.html'                        
      }    
    },
    cssmin: {
      'dist/layout.css': './layout.css'            
    },
    uglify: {
      release:{
        files: {
          'dist/main.js': './main.js'                            
        }
      } 
    },
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['htmlhint'],['csslint'],['eslint'],['htmlmin'],['cssmin'],['uglify']);

};

