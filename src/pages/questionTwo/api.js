import axios from "axios"

const getCardDetails = () => new Promise((resolve, reject) => {
	axios.get('http://localhost:3001/example')
		.then(r => resolve(r.data))
		.catch(e => reject(e))
})

export { getCardDetails }