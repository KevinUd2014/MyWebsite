/*let express = require('express');
let app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

let server = app.listen(8081, function () {
   let host = server.address().address
   let port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port) 
})*/

let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');

let port = 3000;

let index = require('./routes/index');
let tasks = require('./routes/tasks'); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder
app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log('Server started on localhost port: ' + port);
});