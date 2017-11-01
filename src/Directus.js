var Directus = require('directus-sdk-javascript/remote');
var ngDirectusModule = require('./module.js');

/**
 * @ngdoc object
 * @name ngParse.DirectusProvider
 *
 * @description
 * Provider for Directus service.
 */
function DirectusProvider() {
	this.directus;

	this.init = function init(url,key,version){
		var options = {
			url: url
		};
		if(key){
			options.key = key;
		}
		if(version){
			options.version = version;
		}
		this.directus = new Directus(options);
	}

	this.$get = function (){
    return this;
  }
}

function DirectusService(directusConfig){
	var self = this;

	self.getItems = function(table, options){
		return directusConfig.directus.getItems(table, options);
	}
}

ngDirectusModule
  .provider('directusConfig', DirectusProvider)
	.service('directus', DirectusService);
