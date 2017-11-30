let express = require('express')
let path = require('path')
let app = express()

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./woori.html'))
})

app.use(express.static(path.resolve('.')))

app.listen(3000, () => console.log('Serving on 3000'))
