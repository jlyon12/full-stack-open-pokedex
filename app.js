const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 3000

app.get('/version', (_req, res) => {
  res.send('4')
})

app.get('/health', (_req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('error...  ')
  res.send('ok')
})

app.use(express.static('dist'))


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
