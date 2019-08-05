const url = require('url')
const Router = require('./router')

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

function handler(request) {
    const color_url = new URL(request.url).search
    const my_color = new URLSearchParams(color_url).get('color')

    let body
    let init = {
        headers: {
            'content-type': 'application/json',
            statusCode: 200
        }
    }

    if (my_color) {
        body = JSON.stringify({ color: my_color })
    } else { 
        body = JSON.stringify({ color: 'random color' })
    }

    return new Response(body, init)
}

async function handleRequest(request) {
    const r = new Router()
    // Replace with the approriate paths and handlers
    r.get('.*/bar/*', () => handler(request))
    const resp = await r.route(request)
    return resp
}
