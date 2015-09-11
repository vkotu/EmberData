/* jshint ignore:start */

define('te/config/environment', ['ember'], function(Ember) {
  var prefix = 'te';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("te/tests/test-helper");
} else {
  require("te/app")["default"].create({"name":"te","version":"0.0.0+"});
}

/* jshint ignore:end */
