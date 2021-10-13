import React from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
	return (
		<main className="text-gray-400 bg-gray-900 body-font">
			<Navbar />
			<About />
			<hr className="border-gray-800 bg-gray-800 h-2 m-6 rounded shadow-md" />
			<Projects />
			<hr className="border-gray-800 bg-gray-800 h-2 m-6 rounded shadow-md" />
			<Skills />
			<hr className="border-gray-800 bg-gray-800 h-2 m-6 rounded shadow-md" />
			<Experience />
			<hr className="border-gray-800 bg-gray-800 h-2 m-6 rounded shadow-md" />
			<Contact />
			<Footer />
		</main>
	);
}
