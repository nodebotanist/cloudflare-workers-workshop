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

async function sendColor(request) {
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
            my_color = color(my_color)
        } catch (err) {
            init.headers.statusCode = 400
            body = JSON.stringify({
                error: 'invalid color'
            })
            return new Response(body, init)
        }
    } else {
        my_color = color({
            r: Math.round(Math.random() * 255),
            g: Math.round(Math.random() * 255),
            b: Math.round(Math.random() * 255)
        })
    }

    let jwt = await fetch('https://jwt-dispenser.kas.workers.dev', {
        method: 'POST',
        body: JSON.stringify({
            r: my_color.red(),
            g: my_color.green(),
            b: my_color.blue()
        })
    })
    jwt = await jwt.text()
    console.log(jwt)

    body = await fetch('https://color-queue.kas.workers.dev', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })
    body = await body.text()
    return new Response(body, init)
}

async function handleRequest(request) {
    const r = new Router()
    // Replace with the approriate paths and handlers
    r.get('.*/color/*', () => getColor(request))
    r.get('.*/queue-color/*', () => sendColor(request))
    const resp = await r.route(request)
    return resp
}
