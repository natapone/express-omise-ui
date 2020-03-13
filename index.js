const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use('/pay', express.static('pay'))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
