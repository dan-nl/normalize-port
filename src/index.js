'use strict';

/**
 * normalize a port into a number, string, or false
 *
 * based on the express application generator
 * @link http://expressjs.com/en/starter/generator.html
 *
 * @param {number|string} val
 * @return {number|string|boolean}
 */
function normalizePort( val ) {
  var port = parseInt( val, 10 );

  if ( Number.isNaN( port ) ) {
    // named pipe
    return val;
  }

  if ( port >= 0 ) {
    // port number
    return port;
  }

  return false;
}

module.exports = normalizePort;
