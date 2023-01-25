const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
app.use(bodyParser.json())

app.post('/write', (req, res) => {
    fs.writeFile('info.txt', req.body.inputText, (err) => {
        if (err) throw err
        console.log('The file has been saved!')
        res.send('The file has been saved!')
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})
