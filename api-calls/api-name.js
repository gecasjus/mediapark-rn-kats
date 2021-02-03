import axios from "axios";

export const getNames = async () => {
	
	const arr = []
		try {
			await axios.get('https://bikeindex.org/api/v3/manufacturers?page=1&per_page=100')
			.then(res => {
				let catnames = Object.values(res.data)
							.map(res => res
								.map(kitty => kitty.name))
					let unnestedNames = catnames.flat()
					let spread = [...unnestedNames]
					spread.map(item => {
						arr.push({cat: item})
					})
				})
				.catch((err) => {
			console.log(err)
		})
		} catch (error) {
			throw error
		}
		return arr
	}