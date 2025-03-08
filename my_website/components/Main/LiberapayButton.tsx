"use client";

import { useEffect } from "react";

const LiberapayButton = () => {
	useEffect(() => {
		//check kofi script is loaded alr
		if (document.getElementById("kofi-script")) return;

		// define script props from given kofi button
		const script = document.createElement("script");
		script.id = "liberapay-script";
		script.src = "https://liberapay.com/EZRA-DVLPR/widgets/button.js";
		script.async = true;

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	//bc the btn is entirely scripted, then we only return the script, not an html elt
	return null;
};

export default LiberapayButton;
