export const projects = [
	{
		title: 'This Website',
		subtitle: 'JavaScript and React',
		description:
			'Built using JavaScript, TailwindCSS, and ReactJS to act as an extended CV and allow me to practice my frontend design skills.',
		image: './website-thumbnail.gif',
		link: 'https://github.com/jonAckers/PortfolioWebsite',
	},
	{
		title: 'ToDo App',
		subtitle: 'Java',
		description:
			'Built using Java to help manage my work at university and efficiently keep track of my time.',
		image: './todo-thumbnail.jpg',
		link: 'https://github.com/jonAckers/ToDoApp',
	},
	{
		title: 'Sudoku Solver',
		subtitle: 'Python',
		description: 'Built using Python to solve Sudoku puzzles that are entered by the user.',
		image: './sudoku-thumbnail.jpg',
		link: 'https://github.com/jonAckers/SudokuSolver',
	},
	{
		title: 'Path-Finding Visualiser',
		subtitle: 'C++',
		description:
			'Built using C++ to help visualise how shortest path algorithms work and to help me teach myself C++.',
		image: './pathfinding-thumbnail.gif',
		link: 'https://github.com/jonAckers/PathFinding',
	},
	{
		title: 'Chess AI',
		subtitle: 'Java and Python',
		description:
			'Built using Java and Python for my A-Level coursework to learn how to create neural networks to play chess.',
		image: './chess-thumbnail.jpg',
	},
	{
		title: 'TicTacToe',
		subtitle: 'TypeScript, React Native, and AWS',
		description:
			'Built using TypeScript, React Native, and AWS to learn about app development and how to use AWS for hosting my projects.',
		image: './tictactoe-thumbnail.jpg',
		link: 'https://github.com/jonAckers/TicTacToe',
	},
];

export const skills = [
	{ name: 'Python', rating: 4.5 },
	{ name: 'Java', rating: 4 },
	{ name: 'C/C++', rating: 4 },
	{ name: 'SQL', rating: 4 },
	{ name: 'JavaScript', rating: 3.75 },
	{ name: 'OCaml', rating: 3.5 },
	{ name: 'PHP', rating: 2.5 },
	{ name: 'Perl', rating: 2.5 },
];

export const roles = ['Student', 'Developer'];

export const experiences = [
	{
		company: 'Netcraft',
		role: 'Computer Scientist',
		dates: 'June 2020 - August 2020',
		description:
			'Netcraft is an internet services company based in Bath, UK. During my summer internship, I wrote, tested, and deployed code into production while working on many development tickets. I also quickly and effectively learnt new languages like Perl and PHP. Due to the COVID-19 pandemic, I was able to gain experience of working remotely on a shared codebase.',
		image: './netcraft.png',
		link: 'https://www.netcraft.com/',
	},
	{
		company: 'Amazon',
		role: 'Software Development Engineer',
		dates: 'June 2021 - September 2021',
		description:
			'While at Amazon, I worked for the Ring team in Cambridge, UK. The goal of my internship was to create a working pipeline which allowed machine learning models for object detection and recognition to be profiled on edge devices. I was able to work with Computer Vision experts on my team to build a system which could run on Ring security cameras, and deliver easy to read results to users.',
		image: './amazon.png',
		link: 'https://www.amazon.com/',
	},
];
