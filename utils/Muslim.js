/**
 * @author Zahir Hadi Athallah <zhirrrstudio@gmail.com>
 * @license MIT
 */

const fetch = require('node-fetch')
async function Random() {
    let c;
	let url = [
			'https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/wallpaper/Muslim.txt'			
	]
    let a = url[Math.floor(Math.random() * url.length)]
    await fetch(a).then(res => res.text()).then(body => {
            let b = body.split("\n")
            c = b[Math.floor(Math.random() * b.length)]
        });
    return c;
}

const Muslim = () => new Promise((resolve, reject) => {
    Random().then(url => {
		resolve({
			url
		})
	}).catch(err => { reject(err) })
})

module.exports = Muslim
