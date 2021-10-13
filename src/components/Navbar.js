import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navbar() {
	return (
		<header className="bg-gray-800 md:sticky top-0 z-10">
			<div className="container mx-auto flex flex-wrap p-5 items-center flex-col md:flex-row">
				<a
					href="#about"
					className="title-font font-medium text-white mb-4 md:mb-0  justify-center text-xl"
				>
					Jonathon Ackers
				</a>
				<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	justify-center flex flex-wrap items-center text-base">
					<a href="#projects" className="mr-5 hover:text-white">
						Projects
					</a>
					<a href="#skills" className="mr-5 hover:text-white">
						Skills
					</a>
					<a href="#experience" className="mr-5 hover:text-white">
						Experience
					</a>
				</nav>
				<div className="md:ml-auto md:mr-4 md:py-1 md:pr-4 md:border-r md:md:border-gray-700 justify-center flex flex-wrap items-center text-2xl">
					<a
						href="https://linkedin.com/in/jonathon-ackers"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-5 hover:text-white"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://github.com/jonAckers"
						target="_blank"
						rel="noopener noreferrer"
						className="mr-5 hover:text-white"
					>
						<FaGithub />
					</a>
				</div>
				<a
					href="#contact"
					className="inline-flex items-center bg-gray-800 border-0 py-1 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
				>
					Contact Me
					<ArrowRightIcon className="w-4 h-4 ml-1" />
				</a>
			</div>
		</header>
	);
}
