# StealJS's PWA example

In this example we use newest techniques to build a simple, modern PWA.

You can choose to run the webserver with NodeJS or PHP.

This example does not use ServerSideRendering (SSR), but we use NodeJS or PHP to serve the webserver and entry point of your wep app.
On both scenarios (NodeJS or PHP), we load a HTML page that boots up the PWA with StealJS.

**Why do we use NodeJS or PHP to serve the HTML?<br>**
Because, if you looked into the [templates](/templates/) you will see that we put some logic inside, depending on which environment we are (production or development).

**What is the goal?**<br>
Build a single page web application. Transform it to a progressive web app by using a service-worker. Make the app offline available and use it like a native app on your mobile phone.

**What tools are we using?**<br>
- For the backend you can choose from NodeJS or PHP
- On the frontend we use
  - CanJS and its best parts like can-components, done-autorender, can-stache, can-route etc.
  - StealJS for loading all the frontend files like javascript, images, stylesheets etc.
  - Steal-Tools to bundle your web app together
  - Use native promises instead of a polyfill, thanks to steal-tools to give us that opportunity.
  - Steal-Serviceworker for caching and offline support.
  

## Getting Started

### Prerequisites

[NodeJS 7.x](https://nodejs.org/en/download/releases/)
and optional [PHP 7](http://php.net/downloads.php)


### Instructions

First, clone the repo

```bash
$ git clone https://github.com/stealjs/steal-serviceworker.git
```

Then, install all dependencies:

```bash
$ npm install
```

#### Development Mode

**With NodeJS,**

start the NodeJS webserver:
```bash
$ npm run start:dev
```

**With PHP,**

start the PHP builtin webserver:
```bash
$ php -S localhost:8000 server.php
```

#### Production Mode
Fist of all, create a bundled and optimized version of the progressive web application with steal-tools.
```bash
$ cd public
$ npm run build
```

Stop all running development server and run within your root folder:

**On NodeJS**
```bash
$ npm run start:prod
```

**On PHP**
```bash
$ ENV=production php -S localhost:8000 server.php
```

#### Finally
**With NodeJS server running,**
 
visit the webpage on `http://localhost:8080`

**With PHP builtin webserver running,**

visit the webpage on `http://localhost:8000`


Since we used service worker for offline support, try it and activate *offline mode* (under network) in Chrome Devtools.


### TODO
- use manifest.json to install on devices.
- lighthouse rating.