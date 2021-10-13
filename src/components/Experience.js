import React from 'react';
import { BriefcaseIcon } from '@heroicons/react/solid';
import { experiences } from '../data';

export default function Experience() {
	return (
		<section id="experience" className="relative">
			<div className="container px-5 py-10 mx-auto text-center lg:px-40">
				<div className="flex flex-col w-full mb-20">
					<BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
						Work Experience
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Here are some of the companies I have worked at.
					</p>
				</div>
				<div className="flex flex-wrap -m-4">
					{experiences.map((experience) => (
						<a
							href={experience.link}
							key={experience.image}
							className="sm:w-1/2 w-100 p-4"
						>
							<div className="flex relative">
								<img
									alt="gallery"
									className="absolute inset-0 w-full h-full object-scale-down object-center"
									src={experience.image}
								/>
								<div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
									<h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
										{experience.dates}
									</h2>
									<h1 className="title-font text-lg font-medium text-white mb-3">
										{experience.company}
									</h1>
									<h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
										{experience.role}
									</h2>
									<p className="leading-relaxed">{experience.description}</p>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
