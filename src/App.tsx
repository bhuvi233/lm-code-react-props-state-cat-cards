import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import { CatCard } from './components/cat_card';
import { catData } from './data/catData';

function App() {
	// JavaScript code can be inserted here!
	const [cats, setCats] = useState<Array<Cat>>(catData);
	const catCount = cats.length;

	return (
		<>
			<Navbar />
			<Header catCount = {catCount}/>

			<main>
				<div className='cards__wrapper'>{
					cats.map((cat, index) => 
						<CatCard 
							key = {cat.id}
							catObject = {cat}
							catIndex = {index} />
						)
				}</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
