const url = require('url')
const Router = require('./router')
const color = require('color')

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

function getColor(request) {
    const color_url = new URL(request.url).search
    let my_color = new URLSearchParams(color_url).get('color')

    let body
    let init = {
        headers: {
            'content-type': 'application/json',
            statusCode: 200
        }
    }

    if (my_color) {
        try {
            my_color = color(my_color).hex()
        } catch (err) {
            init.headers.statusCode = 400
            body = JSON.stringify({error: 'invalid color'})
            return new Response(body, init)
        }
        body = JSON.stringify({ color: my_color })
    } else { 
        my_color = color({
            r: Math.round(Math.random() * 255),
            g: Math.round(Math.random() * 255),
            b: Math.round(Math.random() * 255)
        })
        body = JSON.stringify({ color: my_color.hex() })
    }

    return new Response(body, init)
}

async function handleRequest(request) {
    const r = new Router()
    // Replace with the approriate paths and handlers
<<<<<<< HEAD
    r.get('.*/color/*', () => handler(request))
=======
    r.get('.*/color/*', () => getColor(request))
>>>>>>> name-cleanup
    const resp = await r.route(request)
    return resp
}
