# directus-sdk-javascript
> Directus SDK for JavaScript (Node and Browser)

<p align="center">
<img src="https://s3.amazonaws.com/f.cl.ly/items/3Q2830043H1Y1c1F1K2D/directus-logo-stacked.png" alt="Directus Logo"/>
</p>

[![NPM](https://nodei.co/npm/directus-sdk-javascript.png)](https://nodei.co/npm/directus-sdk-javascript/)

## Installation

Install the package via npm
`npm install directus-sdk-javascript`

## Usage

Require the RemoteInstance class (support for local instances coming soon)

```javascript
const RemoteInstance = require('directus-sdk-javascript/remote');

const client = new RemoteInstance({
  url: 'http://instance.directus.io/api/1.1/',
  accessToken: [user-token] // optional, can be used without on public routes
});
```

The client returns a Promise which resolves the APIs JSON data on succes and rejects on error
```javascript
client.getItems('projects')
  .then(res => console.log(res))
  .catch(err => console.log(err));
```

Check [the official API docs for a complete overview of all endpoints and available methods](https://api.getdirectus.com/1.1/#Getting_Data)
