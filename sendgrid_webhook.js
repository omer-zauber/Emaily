var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'omerzauber' }, function(err, tunnel) {
  console.log('LT running')
});