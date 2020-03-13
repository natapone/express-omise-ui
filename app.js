const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

var routes_index = require('./routes/index');
var routes_pay = require('./routes/pay');

app.use('/', routes_index);
app.use('/pay', routes_pay);

app.use('/static', express.static('public'))

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
