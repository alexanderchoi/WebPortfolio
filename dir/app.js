const express = require('express'),
      app = express();

app.use(express.static('pages'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render('index');
})


app.listen(process.env.PORT, process.env.IP, function() {
    console.log(`[Server started]`);
})