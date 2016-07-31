module.exports = function(grunt){
//1. All configuration goes here
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	uglify:{
	build: {
		src:'js/perfmatter.js',
		dest: 'js/perfmatters.min.js'
	}
}

	});
	//2. Where we tell Grunt we plan to use this plug-in
	grunt.loadNpmTasks('grunt-contrib-uglify');

//3. Where we tell grunt what to do when we type "grunt" into the terminal
	grunt.registerTask('default', ['uglify']);
};