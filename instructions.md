# Cloudflare Workers Workshop Instructions

Remember to have everything from the [prerequisites](./README.md#prerequisites) ready.

<<<<<<< HEAD
## Getting started
=======
## Part 0 Getting started
>>>>>>> instructions

First, we need to install Wrangler, set it up. and pull down a boilerplate project.

### Installing Wrangler

The steps to install using Node.js via npm or Rust via cargo can be found [in the Wrangler README](https://github.com/cloudflare/wrangler)

### Configuring Wrangler

Use the [`wrangler config`](https://github.com/cloudflare/wrangler#Configuration) command to set up your global user. You will need the email you used to sign up and your [API key](https://support.cloudflare.com/hc/en-us/articles/200167836-Where-do-I-find-my-Cloudflare-API-key-)

## Our first application: using a Template Gallery boilerplate

Our first Workers application will use a [Template Gallery](https://workers.cloudflare.com/docs/templates/) boilerplate as its base, specifically the Router boilerplate. Run the following to set up tho boilerplate:

```bash
<<<<<<< HEAD
wrangler generate my-app https://github.com/cloudflare/worker-template-router
```

This will create a `my-app` folder in the directory you ran the command in. Run `cd my-app` and open the folder in your favorite code editor.
=======
wrangler generate color-app https://github.com/cloudflare/worker-template-router
```

This will create a `color-app` folder in the directory you ran the command in. Run `cd color-app` and open the folder in your favorite code editor.

## Part 1: Creating our own routes

### Creating our new route

1. add a `require` statement to bring in the `url` library to line 1:

```javascript
const url = require('url')
const Router = require('./router')
```

1. rename the `handler` function on line 11 to `getColor`

```javascript
function getColor(request) {
```

1. create a `color_url` and `my_color` variable within the getColor function that will craft a URL object and extract the query string parameter `color`, respectively:

```javascript
function getColor(request) {
    const color_url = new URL(request.url).search
    const my_color = new URLSearchParams(color_url).get('color')
```

1. Add an `if` statement that will return the value of the `color` query if one was sent, and the string `random color` otherwise

1. In thegco

### Testing our function
>>>>>>> instructions
