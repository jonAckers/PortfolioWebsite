import React from 'react';
import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import { skills } from '../data';
import StarRatings from 'react-star-ratings';

export default function Skills() {
	return (
		<section id="skills">
			<div className="container px-5 py-10 mx-auto">
				<div className="text-center mb-20">
					<ChipIcon className="w-10 inline-block mb-4" />
					<h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
						Skills &amp; Technologies
					</h1>
					<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
						Here are some of the programming languages I have learnt as part of my
						education, and in my free time.
					</p>
				</div>
				<div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
					{skills.map((skill) => (
						<div key={skill.name} className="p-2 sm:w-1/2 w-full">
							<div className="bg-gray-800 rounded flex p-4 h-full items-center justify-between">
								<div className="flex">
									<BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 sm:mr-4 xs:mr-1" />
									<span className="title-font font-medium text-white">
										{skill.name}
									</span>
								</div>
								<StarRatings
									rating={skill.rating}
									starRatedColor="#34d399"
									starEmptyColor="#111827"
									numberOfStars={5}
									name="rating"
									starDimension="20px"
									starSpacing="1px"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
