module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
            
            pkg: grunt.file.readJSON('package.json'),
            
            jshint: {
                all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js'],
                options: {
                    jshintrc: '.jshintrc'
                }
            },

            jasmine: {
                coverage: {
                    src: ['src/*.js', '!src/link-stats.js'],
                    options: {
                        version: '2.1.0',
                        specs: 'spec/**/*Spec.js',
                        template: require('grunt-template-jasmine-istanbul'),
                        templateOptions: {
                            coverage: 'bin/coverage.json',
                            report: [
                                {
                                    type: 'html',
                                    options: {
                                        dir: 'bin/html'
                                    }
                                },
                                {
                                    type: 'cobertura',
                                    options: {
                                        dir: 'bin/cobertura'
                                    }
                                },
                                {
                                    type: 'lcov',
                                    options: {
                                        dir: 'bin/lcov'
                                    }
                                },
                                {
                                    type: 'text-summary'
                                }
                            ]
                        }
                    }
                }
            },

            coveralls: {
                grunt_coveralls_coverage: {
                    src: 'bin/lcov/lcov.info'
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-coveralls');

    grunt.registerTask('test', ['jshint', 'jasmine:coverage']);
    grunt.registerTask('default', ['test']);
};
