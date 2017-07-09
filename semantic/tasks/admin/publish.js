/*******************************
 Release All
 *******************************/

/*
 This task update all SUI individual component repos with new versions of shared

  * Commits changes from create shared to GitHub and Tags

*/

var
  runSequence = require('run-sequence')


/* Release All */
module.exports = function (callback) {

  runSequence(
    'update distributions', // commit less/css versions to github
    'update shared', // commit shared to github
    callback
  )

}