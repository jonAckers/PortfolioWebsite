import React from 'react';

export default function Footer() {
	return (
		<footer className="bg-gray-800 px-10 py-4 display-flex flex-shrink xs:text-xs md:text-base">
			<span>
				Created By{' '}
				<a className="text-green-500" href="#about">
					Jonathon Ackers
				</a>{' '}
				| 2021 All rights reserved.
			</span>
		</footer>
	);
}
