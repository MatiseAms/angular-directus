# Angular Directus
Angular wrapper for [Directus Javascript SDK](https://github.com/directus/directus-sdk-javascript)

## Instalation
Install the package via npm: `npm install angular-directus`

## Setup
```
var ngDirectus = require('angular-directus');
require('angular').module('demo', [ngDirectus]);
```

### Include `ngDirectus` module
```
require('angular').module('demo', [ngDirectus]);
```

### Initialize Directus
```
require('angular').module('demo')
  .config(['directusConfigProvider', function(directusConfigProvider) {
    directusConfigProvider.init(URL, KEY, VERSION);
  }]);
```

### Example use in controller, get Items from Table
```
require('angular').module('demo')
	.controller('DemoController', [directus',  function(directus) {
		directus.getItems(TABLE).then(function(response){
			console.log(response);
		},function(error){
			console.error(error);
		});
	}]);
```

Check the official Directus documention for all getting endpoints  https://api.getdirectus.com/1.1/#Getting_Data
