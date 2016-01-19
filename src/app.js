/**
 * Created by eduardo.diaz on 19.01.2016.
 */
'use strict';

var appName = 'sample-angular';

var angular = require('angular');
require('mi-angular-resource-builder');
require('angular-resource');
var requires = [
    'mi.ResourceBuilder',
    'ngResource'
];
angular.module(appName, requires);

angular.bootstrap(document, [appName]);