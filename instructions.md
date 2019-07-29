# Cloudflare Workers Workshop Instructions

Remember to have everything from the [prerequisites](./README.md#prerequisites) ready.

## Getting started

First, we need to install Wrangler, set it up. and pull down a boilerplate project.

### Installing Wrangler

The steps to install using Node.js via npm or Rust via cargo can be found [in the Wrangler README](https://github.com/cloudflare/wrangler)

### Configuring Wrangler

Use the [`wrangler config`](https://github.com/cloudflare/wrangler#Configuration) command to set up your global user. You will need the email you used to sign up and your [API key](https://support.cloudflare.com/hc/en-us/articles/200167836-Where-do-I-find-my-Cloudflare-API-key-)

## Our first application: using a Template Gallery boilerplate

Our first Workers application will use a [Template Gallery](https://workers.cloudflare.com/docs/templates/) boilerplate as its base, specifically the Router boilerplate. Run the following to set up tho boilerplate:

```bash
wrangler generate my-app https://github.com/cloudflare/worker-template-router
```

This will create a `my-app` folder in the directory you ran the command in. Run `cd my-app` and open the folder in your favorite code editor.
