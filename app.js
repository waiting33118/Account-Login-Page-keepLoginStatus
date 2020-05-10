const express = require('express')
const exphdbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkPermission = require('./permission-checker')
const app = express()
const hostname = '127.0.0.1'
const port = 3000

app.engine('handlebars', exphdbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('home')
})

app.post('/', (req, res) => {
	const checkedResult = checkPermission(req.body)
	if (!checkedResult) {
		const userInput = req.body
		const errMessage = 'Wrong Email or Password!'
		res.render('home', { errMessage, userInput })
	} else {
		res.render('userPage', { checkedResult })
	}
})

app.listen(port, hostname, () => {
	console.log(`The Server is listening on http://${hostname}:${port}`)
})
