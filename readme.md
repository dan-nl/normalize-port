## normalize-port
port helper for express

based on the [express application generator][generator-url].

## setup
```bash
npm install dan-nl/normalize-port
```

## use
see [express-http-skeleton][skeleton-url] for an example of use in an application context.

```javascript
var app = express();
var server;
var normalizePort = require( 'normalize-port' );

port = normalizePort( process.env.NODE_PORT );
app.set( 'port', port );
server = http.createServer( app );
```

## license
[MIT License][mit-license]

[david-dm-image]: https://david-dm.org/dan-nl/normalize-port.svg
[david-dm-url]: https://david-dm.org/dan-nl/normalize-port
[david-dm-dev-image]: https://david-dm.org/dan-nl/normalize-port/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/normalize-port?type=dev
[generator-url]: http://expressjs.com/en/starter/generator.html
[mit-license]: https://raw.githubusercontent.com/dan-nl/normalize-port/master/license.txt
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/eff084d6-8efb-427f-90a5-e9ae57ce7593/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/eff084d6-8efb-427f-90a5-e9ae57ce7593
[skeleton-url]: https://github.com/dan-nl/express-http-skeleton/blob/master/bin/www
