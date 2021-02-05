const express = require('express')
const router  = express.Router()

const {
	Muslim
} = require('../utils')

router.get('/api/wallpaper/muslim', (req, res) => {
	Muslim()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

module.exports = router
