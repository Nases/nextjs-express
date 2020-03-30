const express = require('express')

const app = express()

app.use('/', (req, res) => {
  res.send('it works!')
})

app.listen(3000, console.log('listening on port 3000'))

module.exports = app