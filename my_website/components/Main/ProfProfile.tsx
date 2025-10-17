"use client";

import GalleryToggle from "./GalleryToggle";
import ResumeSection from "./Resume";

const ProfProfile = () => {
	return (
		<>
			<div className="container mx-auto p-4">
				<h1 className="text-3xl font-bold">Certifications</h1>
				<GalleryToggle />
				<ResumeSection />
				<br />
				<h2 className="text-2xl font-bold text-center">
					Click the link below for private tutoring services!
				</h2>
				<a href="https://www.superprof.com/ir/36423123-4d7589" target="_blank">
					<p className="text-xl text-center text-primary-400">
						SuperProf Profile
					</p>
				</a>
			</div>
		</>
	);
};

export default ProfProfile;
