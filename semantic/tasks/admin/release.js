/*******************************
 Release
 *******************************/

/*
 This task update all SUI individual component repos with new versions of shared

  * Initializes repositories with current versions
  * Creates local files at ../distributions/ with each repo for release

*/

var
  runSequence = require('run-sequence')


/* Release All */
module.exports = function (callback) {

  runSequence(
    //'build', // build Semantic
    'init distributions', // sync with current github version
    'create distributions', // update each repo with changes from master repo
    'init shared', // sync with current github version
    'create shared', // update each repo
    callback
  )

}