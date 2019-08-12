# Cloudflare Workers Workshop Instructions

Remember to have everything from the [prerequisites](./README.md#prerequisites) ready.

## Part 0 Getting started

First, we need to install Wrangler, set it up. and pull down a boilerplate project.

### Installing Wrangler

The steps to install using Node.js via npm or Rust via cargo can be found [in the Wrangler README](https://github.com/cloudflare/wrangler)

### Configuring Wrangler

Use the [`wrangler config`](https://github.com/cloudflare/wrangler#Configuration) command to set up your global user. You will need the email you used to sign up and your [API key](https://support.cloudflare.com/hc/en-us/articles/200167836-Where-do-I-find-my-Cloudflare-API-key-)

## Our first application: using a Template Gallery boilerplate

Our first Workers application will use a [Template Gallery](https://workers.cloudflare.com/docs/templates/) boilerplate as its base, specifically the Router boilerplate. Run the following to set up tho boilerplate:

```bash
wrangler generate color-app https://github.com/cloudflare/worker-template-router
```

This will create a `color-app` folder in the directory you ran the command in. Run `cd color-app` and open the folder in your favorite code editor.

## Part 1: Creating our own routes

### Creating our new route

1. add a `require` statement to bring in the `url` library to line 1:

```javascript
// new code
const url = require('url')
// end new code
const Router = require('./router')
```

1. rename the `handler` function to `getColor`

```javascript
function getColor(request) {
```

1. create a `color_url` and `my_color` variable within the getColor function that will craft a URL object and extract the query string parameter `color`, respectively:

```javascript
function getColor(request) { 
	// new code
	const color_url = new URL(request.url).search
	const my_color = new URLSearchParams(color_url).get('color')
	// end new code
```

1. After the creation of the body and headers, add an `if` statement that will set `body` to the value of the `color` query if one was sent, and the string `random color` otherwise

```javascript
let body
let init = {
	headers: {
		'content-type': 'application/json',
		statusCode: 200
	}
}

// new code
if (my_color){
	body = my_color
} else {
	body = random_color
}
// end new code

return new Response(body, init)
```

1. In the `handleRequest` function, get rid of the routes and add one for your new `getColor` function:

```javascript
async function handleRequest(request) {
    const r = new Router()
    // new code
		r.get('.*/color/*', () => handler(request))
		// end of new code
    const resp = await r.route(request)
    return resp
}
```

### Testing our function
