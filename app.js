const express = require('express')
const exphdbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')
const checkPermission = require('./permission-checker')
const app = express()
const hostname = '127.0.0.1'
const port = 3000

app.engine('handlebars', exphdbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

//express-session params
app.use(
	session({
		secret: 'secret string for login validation',
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: false,
		},
	})
)

app.get('/', (req, res) => {
	if (!req.session.info) {
		res.render('home')
	} else {
		res.render('userPage', { checkedResult: req.session.info })
	}
})

app.get('/logout', (req, res) => {
	req.session.destroy()
	res.redirect('/')
})

app.post('/', (req, res) => {
	const checkedResult = checkPermission(req.body)
	req.session.info = checkedResult
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
