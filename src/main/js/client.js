// Modified from https://github.com/spring-guides/tut-react-and-spring-data-rest/blob/master/basic/src/main/js/client.js

'use strict';

const rest = require('rest');
const defaultRequest = require('rest/interceptor/defaultRequest');
const mime = require('rest/interceptor/mime');
const errorCode = require('rest/interceptor/errorCode');
const baseRegistry = require('rest/mime/registry');

const registry = baseRegistry.child();

registry.register('application/hal+json', require('rest/mime/type/application/hal'));

module.exports = rest
		.wrap(mime, { registry: registry })
		.wrap(errorCode)
		.wrap(defaultRequest, { headers: { 'Accept': 'application/hal+json', 'Content-Type': 'application/hal+json' }});
