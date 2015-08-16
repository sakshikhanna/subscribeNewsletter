module.exports = function(grunt) {
	grunt.initConfig({
	  connect: {
	    server: {
	      options: {
	        port: 9001,
	        base: 'src',
	        keepalive: true
	      }
	    }
	  }
	});
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('start-dev', ['connect']);
}