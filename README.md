# Quick and dirty Fastify config

A personal config for Fastify.

## Public folder

Public files are served at localhost:3000/public/* e.g. `localhost:3000/public/example.json`

## Routes

Routes use the folder structure to determine the route. e.g. `localhost:3000/a/path` would be `routes/a/path.js`

## Plugins

Plugins are loaded automatically from the modules folder with autoloader

## Templates

Templates are loaded from the views directory and use the handlebars engine

## Logs

Logs are written to the logs directory and to the console

## Type provider

Type provider allows autocomplete for the routes, see [fastify-type-provider-typebox](https://github.com/fastify/fastify-type-provider-typebox) and [typebox](https://github.com/sinclairzx81/typebox)

## Swagger

By using type providers, the swagger docs are automatically generated at `localhost:3000/docmentation`
