/**
 * Sleeps for N seconds
 * 
 * @param {number} seconds Time to sleep in seconds
 */
function sleep (seconds) {
  msleep(seconds * 1000);  
}

/**
 * Sleeps for N milliseconds
 *  
 * @param {number} milliseconds Time to sleep in milliseconds.
 */
function msleep(milliseconds) {
    return Atomics
      .wait(
        new Int32Array(
          new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

exports.default = {sleep, msleep};
module.exports = exports['default'];