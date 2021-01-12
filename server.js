const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  if (req.get('host').includes('app.agribalyse.fr')) {
    res.set('location', 'https://agribalyse.fr/app' + req.originalUrl)
    res.status(301).send()
  }
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.listen(port)
