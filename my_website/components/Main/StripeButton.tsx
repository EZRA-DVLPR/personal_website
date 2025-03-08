"use client";

import { useEffect } from "react";

const StripeButton = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://js.stripe.com/v3/buy-button.js";
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div>
			<stripe-buy-button
				buy-button-id="buy_btn_1R0IFIFG5nxP1asba7SdmVpK"
				publishable-key="pk_live_51R0GQtFG5nxP1asbGtZSqJvCZ7j6KpnVXz0Fc8n3qfFSGNkphDHm1pOgH11N0DYLMTyq3tZKiGzBi61EvhCMJI6000nxS4K20b"
			></stripe-buy-button>
		</div>
	);
};

export default StripeButton;
