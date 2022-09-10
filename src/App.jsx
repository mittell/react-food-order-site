import React from 'react';
import Category from './components/Category';
import Food from './components/Food';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<HeadlineCards />
			<Food />
			<Category />
		</>
	);
};

export default App;
