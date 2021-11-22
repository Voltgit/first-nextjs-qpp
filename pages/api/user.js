import Cors from 'cors'

const cors = Cors({
	methods: ['GET']
})

function runMiddlewar(req, res, fn) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result) => {
			if (result instanceof Error) {
				return reject(result)
			}
			return resolve(result)
		})
	})
}

export default async function handler(req, res) {

	await runMiddlewar(req, res, cors)

	res.status(200).json({ id: 1 })
}