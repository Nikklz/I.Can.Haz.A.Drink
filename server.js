//require methods
const express = require ('express');
// const logger = require ('morgan');
// const bodyParser = require ('body-parser');
// const path = require('path');

//start the app
const app = express();

//config port
const PORT = process.env.PORT || 3000
app.listen (PORT, () => {
	console.log (`server is listening on port ${PORT} environment ${process.env.NODE_ENV}`);
})

// //config
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}))

// //static config 
// app.use(express.static('public'))

// //view config 
// app.set('views',path.join(__dirname,'views'))
// app.set('view engine','ejs')

// //tell root to send this file as index page
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// //require routes
// const dranksRouter = require('./routes/dranksRouter')
// app.use('/dranks', dranksRouter)


// //else route
// app.use('*',(rep,res) => {
// 	res.status(404).json ({
// 		message: 'error handler'
// 	})
// });
