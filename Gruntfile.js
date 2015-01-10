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
                options: {
                    // LCOV coverage file relevant to every target
                    src: 'bin/lcov/lcov.info',

                    // When true, grunt-coveralls will only print a warning rather than
                    // an error, to prevent CI builds from failing unnecessarily (e.g. if
                    // coveralls.io is down). Optional, defaults to false.
                    force: false
                },
                your_target: {
                    // Target-specific LCOV coverage file
                    src: 'bin/lcov/lcov.info'
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-coveralls');

    grunt.registerTask('test', ['jshint', 'jasmine:coverage', 'coveralls']);
    grunt.registerTask('default', ['test']);
};
