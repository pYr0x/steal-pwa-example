# StealJS's PWA example

In this example we use newest techniques to build a simple, modern PWA.

You can choose to run the webserver with NodeJS or PHP.

This example does not use ServerSideRendering (SSR), but we use NodeJS or PHP to serve the webserver and entry point of your wep app.
On both scenarios (NodeJS or PHP), we load a HTML page that boots up the PWA with StealJS.

**Why do we use NodeJS or PHP to serve the HTML?<br>**
Because, if you looked into the [templates](/templates/) folder you will see that we put some logic inside depending on the environment we are (production or development).

**What is the goal?**<br>
Build a single page web application. Transform it to a progressive web app by using a service-worker. Make the app offline available and use it like a native app on your mobile phone.

**What tools are we using?**<br>
- For the backend you can choose from NodeJS or PHP
- On the frontend we use
  - CanJS and its best parts like can-components, done-autorender, can-stache, can-route etc.
  - StealJS for loading all the frontend files like javascript, images, stylesheets etc.
  - Steal-Tools to bundle your web app together
  - Steal-Serviceworker for caching and offline support.
  
