import React, { useEffect, useState } from "react";


const urlBase = "https://rickandmortyapi.com/api"

//create your first component
const Home = () => {
	const [character, setCharacter] = useState([])


	// then
	// const getAllCharacter = () => {
	// 	fetch(`${urlBase}/character`)
	// 		.then((response) => response.json())
	// 		.then((data) => setCharacter(data.results))
	// 		.catch((error) => console.log(error))
	// }

	const getAllCharacter = async () => {
		try {
			const response = await fetch(`${urlBase}/character`) // otro idioma
			const data = await response.json()

			setCharacter(data.results)

		} catch (error) {
			console.log(error)
		}
	}


	useEffect(() => {
		getAllCharacter()
	}, [])

	return (
		<div className="container">
			<div className="row">
				<h1>Rick and morty</h1>

				{
					character.map((item) => (
						<div key={item.id} className="col-md-4 mb-3">
							<div className="card">
								<img src={item.image} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="#" className="btn btn-primary">Go somewhere</a>
								</div>
							</div>
						</div>
					))
				}

			</div>
		</div>
	);
};

export default Home;
