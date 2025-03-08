import { genPageMetadata } from "app/seo";
import ArtGallery from "@/components/ArtGallery";

export const metadata = genPageMetadata({ title: "Art" });

const images = [
	// {
	//   src: '/static/art/.jpg',
	//   title: 'Title',
	//   description:
	//     'Description',
	//   date: '2023-05-02',
	// },
	{
		src: "/static/art/bwabstract.jpg",
		title: "Abstract Spotlight",
		description:
			"This piece was one of the final parts of the art class where we learned about and created abstract art. This is one of two pieces created is intentionally very simplistic and elegant. It uses grayscale which is my preferred color scheme. It has beautiful curves and edges which guide the eyes like a spotlight effect. This is one my favorite pieces.",
		date: "2023-04-27",
	},
	{
		src: "/static/art/redscrunchie.jpeg",
		title: "Red Scrunchie - Framing Study",
		description:
			"For my art class, we were tasked with wandering campus to find and utilize the environment to frame objects to draw attention. For this image, I found a scrunchie that could be used with the red tarps above.",
		date: "2023-02-16",
	},
	{
		src: "/static/art/SeaHorse.png",
		title: "SeaHorse Coloring",
		description:
			"For this assignment in the art class I took, we were advised to use a color that we normally don't utilize in art. I don't typically color in browns and so I opted to use brown. This was a cool assignment because it put me out of my comfort zone.",
		date: "2023-02-23",
	},
	{
		src: "/static/art/ohmshirt.jpeg",
		title: "Ohm Shirt - Framing Study",
		description:
			"For my art class, we were tasked with wandering campus to find and utilize the environment to frame objects to draw attention. I took my shirt off and wanted to show the color variety of the Ohm symbol so I picked a neutral background of the rocks, and scoured the nearby area for colored rocks to balance the color variety from the shirt.",
		date: "2023-02-16",
	},
	{
		src: "/static/art/sloth.jpg",
		title: "Sloth",
		description:
			"I like Sloths. I found this sleeping position especially comical and had to snap a photo. He sleep.",
		date: "2018-07-29",
	},
	{
		src: "/static/art/abstractVW.jpg",
		title: "Abstract piece with Victor Wooten",
		description:
			"For an assignment for the art class I took, we were instructed to take an image of a famous person and create abstract art with them alongisde other objects given to us. I chose to use Victor Wooten because he is an incredible bass player and one who I look up to as a bass player. I sought to challenge myself and intentionally used oddly shaped objects for a bigger challenge.",
		date: "2023-04-13",
	},
	{
		src: "/static/art/Bull.png",
		title: "Bulls on Parade?",
		description:
			"A series of Bull Heads that were designed by me with different textures applied. This was a twofold study on Composition as well as Texturing.",
		date: "2023-04-06",
	},
	{
		src: "/static/art/gorilla.jpg",
		title: "Gorilla",
		description: "I like gorillas. He sit.",
		date: "2021-09-12",
	},
	{
		src: "/static/art/bwscenery.jpg",
		title: "B/W Scenery",
		description:
			"This is a photo of a part of campus in black and white. It was a study done to find a figure that is the subject and make it interesting.",
		date: "2023-02-16",
	},
	{
		src: "/static/art/abstract.jpg",
		title: "Abstract",
		description:
			"This piece was one of the final parts of the art class where we learned about abstract art. This is one of two pieces created is intentionally very busy visually. It is supposed to be completely different than the other piece. It has lots of interesting designs layered over each other.",
		date: "2023-04-27",
	},
	{
		src: "/static/art/Bee.png",
		title: "Purple Bee",
		description:
			"A Cute Bee I made in the art class I took. This was a challenging one for me because I was learning about curves and identifying points of interest in my animal design.",
		date: "2023-03-16",
	},
	{
		src: "/static/art/Moth.jpg",
		title: "Cross Hatching Moth",
		description:
			"For my art class, we were given this slip of paper with the outline of the moth. We were then told to fill in the image using only the cross hatching technique.",
		date: "2023-05-02",
	},
];

export default function Projects() {
	return (
		<>
			<div className="divide-y divide-gray-200 dark:divide-gray-700">
				<h1 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
					Art Gallery
				</h1>
				<p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
					Click on an image to learn more!
				</p>
				<div>
					<p className="mt-4" />
					<ArtGallery images={images} />
				</div>
			</div>
		</>
	);
}
