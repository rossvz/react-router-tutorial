const express = require('express')
const path = require('path')
const port = process.env.PORT || 4000
const app = express()

app.use(express.static(__dirname + '/public'))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log('Started Server on port: ' + port)
