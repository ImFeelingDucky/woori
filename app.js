let express = require('express')
let path = require('path')
let app = express()

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})

app.use(express.static(path.resolve('.')))

let port

try {
    port = process.env.PORT
} catch (err) {
    port = 3000
}

app.listen(port, () => console.log('Serving on ' + port.toString()))