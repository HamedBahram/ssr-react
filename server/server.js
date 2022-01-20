import express from 'express'
import path from 'path'
import fs from 'fs'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src/App'

const app = express()

app.get('/', (req, res) => {
    const app = ReactDOMServer.renderToString(<App />)
    const indexFile = path.resolve('build', 'index.html')
    const html = fs.readFileSync(indexFile, { encoding: 'utf-8' })
    res.send(html.replace('<div id="root"></div>', `<div id="root">${app}</div>`))
})

app.use(express.static(path.resolve('build')))

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`app running on port: ${PORT}`))
