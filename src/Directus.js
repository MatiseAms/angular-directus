var Directus = require('directus-sdk-javascript');
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
		this.directus = new Directus(key,url,version);
	}

	this.$get = function (){
    return this;
  }
}

function DirectusService(directusConfig){
	var self = this;

	directusConfig.directus.getEntries(table, (err, res) => {
	  if(err) throw err;
	  console.log(res);
	});
}

ngDirectusModule
  .provider('directusConfig', DirectusProvider)
	.service('directus', DirectusService);
