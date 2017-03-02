module.exports = function(grunt) {
          
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'assets/js/scripts.js',
        dest: 'assets/scripts/scripts.js'
      }
    },
    sass: {                              // Task 
      dist: {                            // Target 
        options: {                       // Target options 
          style: 'expanded'
         },
      files: {                         // Dictionary of files 
        'assets/css/styles.css': 'assets/sass/styles.scss'       // 'destination': 'source' 
	} 
    }
  },
  watch: {
    scripts: {
      files: 'assets/js/scripts.js',
      tasks: ['uglify'],
    },
    styles: {
      files: 'assets/sass/styles.scss',
      tasks: ['sass', 'autoprefixer', 'cssmin']
    }
    },
    autoprefixer: {
	    options: {
		  browsers: ['last 2 versions', 'ie 8', 'ie 9']
		},
		dist: {
			files: {
				'assets/css/stylesheet.css': 'assets/css/styles.css'
			}
		}
	},
	cssmin: {
	  options: {
	    shorthandCompacting: false,
	    roundingPrecision: -1,
	    sourceMap: true
	  },
	  target: {
	    files: [{
	      expand: true,
	      cwd: 'assets/css',
	      src: ['stylesheet.css'],
	      dest: 'assets/css',
	      ext: '.min.css'
	    }]
	  }
	}
  });
       
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
      
  grunt.loadNpmTasks('grunt-contrib-sass');
          
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass', 'autoprefixer', 'cssmin', 'watch']);

};
