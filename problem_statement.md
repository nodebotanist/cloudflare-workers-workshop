# Problem Statement and Relevant Information

## The Problem

There is a Raspberry Pi at the front of the room with a hat with RGB LEDs on it. We are going to write a Cloudflare Workers application to add colors to it, both random and of our own choosing

## Steps to complete

1. Register a free Workers account using workers.dev
1. Install Wrangler
1. Use Wrangler to install a boilerplate router
1. Configure Wrangler and set your API key in `wrangler.toml`
1. Create routes using the router boilerplate
1. Use npm packages: 
	1. to create your first route that sends back a random color...
	1. ...OR the RGB color of a named color you send
1. Use `fetch()` with `async` and `await` to get information we need from outside sources

## Route you will build

### GET random-color.[your subdomain].workers.dev/color

* If `color` is empty, returns a random RGB hex color
* If `color` is not empty...
	* returns RGB hex of the CSS color sent with a `200` status
	* returns a `400` error if the sent color is not a valid css color.

## External API you'll be using

### POST https://jwt-dispenser.kas.workers.dev

Accepts: a JSON object with either:

* a `color` property that is any CSS color name
* `r`, `g`, and `b` properties, all between 0-256, representing red, green, and blue values
* `h`, `s`, and `v` properties; `h` between 0 and 364, `s` between 0 and 100, and `v` between 0 and 100, representing hue, saturation, and value.

Returns: A JWT signed with a secret and the color you sent in the payload

### POST https://color-queue.kas.workers.dev

Required: an `Authorization` header with `Bearer: `	and a JWT from the previous endpoint, which contains the color you sent to the previous endpoint

Places the color in the queue to be shown and returns a response of 200 if successful
