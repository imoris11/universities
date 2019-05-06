var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  gulpMocha = require('gulp-mocha'),
  env =  require('gulp-env'),
  supertest = require('supertest');

gulp.task('default', ()=>{
  nodemon({
    script:'app.js',
    ext: 'js',
    env: {
      PORT:8000
    },
    ignore: ['./node_modules/**']
  }).on('restart', ()=> {
    console.log("Restarting...")
  });
});

gulp.task('test', async () => {
  env({vars:{ENV: 'Test'}});
  gulp.src('tests/*.js', {read:false})
  .pipe(gulpMocha({reporter: 'nyan'}))
})
