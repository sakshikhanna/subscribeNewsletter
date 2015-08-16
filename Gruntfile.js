module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	  connect: {
	    server: {
	      options: {
	        port: 9001,
	        base: 'src',
	        // keepalive: true
	      }
	    }
	  },
	  sass: {
	    dist: {
	      options: {
	        style: 'expanded',
	        trace: true
	      },
	      files: {
	        'src/css/compiled.css': 'src/scss/main.scss'
	      }
	    }
	  },
	  watch: {
	   css: {
	       options: {
	         livereload: true,

	       },
	       files: 'src/scss/**/*.scss',
	       tasks: ['sass'],
	     }
	  }	  
	});
	// grunt.loadNpmTasks('grunt-contrib-watch');
	// grunt.loadNpmTasks('grunt-contrib-connect');
	// grunt.loadNpmTasks('grunt-contrib-sass');
	// grunt.registerTask('convert', ['sass','connect','watch']);
	grunt.registerTask('start-dev', ['sass','connect','watch']);
};