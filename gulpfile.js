// Dependencies
const gulp = require ('gulp');
const clean = require('gulp-clean');
const ts = require ('gulp-typescript');
const tslint = require ('gulp-tslint');

const tsProject = ts.createProject ('tsconfig.json');

// Tasks
gulp.task ('clean', () =>
	gulp
		.src ('dist', { read: false })
		.pipe (clean ()));


gulp.task ('lint', () =>
	gulp
		.src ('src/**/*.ts')
		.pipe (tslint ({ formatter: 'stylish' }))
		.pipe (tslint.report ()));

gulp.task ('build', ['lint', 'clean'], () =>
	gulp
		.src ('src/**/*.ts')
		.pipe (tsProject ())
		.pipe (gulp.dest ('dist')));

gulp.task ('default', ['build']);
