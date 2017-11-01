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

	self.getActivity = function getActivity(params){
		return directusConfig.directus.getActivity(options);
	}

	self.getItems = function getItems(table, params){
		return directusConfig.directus.getItems(table, params);
	}

	self.getItem = function getItem(table, id, params){
		return directusConfig.directus.getItem(table, id, params);
	}

	self.getUsers = function getUsers(params){
		return directusConfig.directus.getUsers(params);
	}

	self.getUser = function getUser(id, params){
		return directusConfig.directus.getUser(id, params);
	}

	self.getFiles = function getFiles(params){
		return directusConfig.directus.getFiles(params);
	}

	self.getFile = function getFile(id, params){
		return directusConfig.directus.getFile(id, params);
	}

	self.getGroups = function getGroups(params){
		return directusConfig.directus.getGroups(params);
	}

	self.getGroup = function getGroup(id, params){
		return directusConfig.directus.getGroup(id, params);
	}

	self.getGroupPrivileges = function getGroupPrivileges(group_id){
		return directusConfig.directus.getGroupPrivileges(group_id);
	}

	self.getSettings = function getSettings(){
		return directusConfig.directus.getSettings();
	}

	self.getSettingsByCollection = function getSettingsByCollection(collection){
		return directusConfig.directus.getSettingsByCollection(collection);
	}

	self.getMessages = function getMessages(user){
		return directusConfig.directus.getMessages(user);
	}

	self.getMessage = function getMessage(id){
		return directusConfig.directus.getMessage(id);
	}

	self.getTables = function getTables(params){
		return directusConfig.directus.getTables(params);
	}

	self.getTable = function getTable(table){
		return directusConfig.directus.getTable(table);
	}

	self.getColumns = function getColumns(table, params){
		return directusConfig.directus.getColumns(table, params);
	}

	self.getColumn = function getColumn(table, column){
		return directusConfig.directus.getColumn(table, column);
	}
}

ngDirectusModule
  .provider('directusConfig', DirectusProvider)
	.service('directus', DirectusService);
