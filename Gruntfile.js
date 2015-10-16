/* globals module */

module.exports = function (grunt) {


	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		//
		// Pre-processes Sass files with compression
		//

		sass: {
			options: {
				outputStyle: 'compressed',
				sourceMap  : true
			},
			dist: {
				files: {
					'css/main.css' : 'css/sass/main.sass'
				}
			}
		},


		//
		// Combines and minifies JS files
		//

		browserify: {
			dist: {
				files: {
					'js/main.js': 'js/src/main.js'
				},
				options: {
					transform: ['uglifyify']
				}
			}
		},


		//
		// Watch certain file types for changes, take action
		//

		watch: {
			styles: {
				files: [
					'css/sass/**/*.sass',
					'css/sass/**/*.scss'
				],
				tasks: ['sass']
			},
			scripts: {
				files: [
					'assets/js/src/**/*.js'
				],
				tasks: ['browserify']
			},
			grunt: {
				files: [
					'Gruntfile.js'
				],
				tasks: ['sass', 'browserify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-inline-css');

	grunt.registerTask('default');

};