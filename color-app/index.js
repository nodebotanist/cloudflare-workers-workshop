const Router = require('./router')

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

function handler(request) {
    const init = {
        headers: { 'content-type': 'application/json' },
    }
    // import the url library up top
    // create a new URL with request.url and a new URLSearchParams with the URL object
    // use the URLSearchParams object to get the color param
    // If there's a color, send it
    // otherwise, send a random color
    const body = JSON.stringify({ some: 'json' })
    return new Response(body, init)
}

async function handleRequest(request) {
    const r = new Router()

    // creato a route color here to use the handler function

    const resp = await r.route(request)
    return resp
}
