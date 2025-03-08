"use client";

import { useEffect } from "react";

const KofiButton = () => {
	useEffect(() => {
		//check kofi script is loaded alr
		if (document.getElementById("kofi-script")) return;

		// define script props from given kofi button
		const script = document.createElement("script");
		script.id = "kofi-script";
		script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
		script.async = true;
		script.onload = () => {
			if (window.kofiWidgetOverlay) {
				window.kofiWidgetOverlay.draw("ezra_dvlpr", {
					type: "floating-chat",
					"floating-chat.donateButton.text": "Tip Me",
					"floating-chat.donateButton.background-color": "#00b9fe",
					"floating-chat.donateButton.text-color": "#fff",
				});
			}
		};

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	//bc the btn is entirely scripted, then we only return the script, not an html elt
	return null;
};

export default KofiButton;
