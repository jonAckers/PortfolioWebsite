import React from 'react';
import Typewriter from 'typewriter-effect';
import { roles } from '../data';

export default function About() {
	return (
		<section id="about">
			<div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
				<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
					<h1 className="flow-root title-font md:text-4xl sm:text-4xl text-3xl mb-4 font-medium text-white inline">
						Hi, I'm Jon.
						<div className="flex md:text-3xl xs:text-2xl">
							I am a&nbsp;
							<Typewriter
								options={{
									strings: roles.map(
										(role) =>
											`<span class="text-green-500 font-bold">${role}</span>`
									),
									autoStart: true,
									loop: true,
								}}
							/>
						</div>
					</h1>

					<p className="mb-8 leading-relaxed">
						Hi! I’m a third year computer science student at the University of
						Cambridge. I am passionate about software engineering, with most of my
						experience being backend work in Java, C++, and Python. I have also worked
						with JavaScript and TypeScript for frontend applications.
					</p>
					<div className="flex justify-center">
						<a
							href="#contact"
							className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
						>
							Contact Me
						</a>
						<a
							href="#projects"
							className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
						>
							My Projects
						</a>
					</div>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
					<img
						className="object-cover object-center rounded"
						alt="hero"
						src="./coding.svg"
					/>
				</div>
			</div>
		</section>
	);
}
