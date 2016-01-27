'use strict';

module.exports = require('angular')
    .module('schared', [
    ])
    .config(['ResourceBuilderProvider', function (ResourceBuilderProvider) {
        // append url based on environment
        var resources = require('./resource/index');
        ResourceBuilderProvider.addResources(resources);
    }]);
