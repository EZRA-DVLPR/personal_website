"use client";

import { useEffect } from "react";

const StripeButton = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://js.stripe.com/v3/buy-button.js";
		script.async = true;
		document.body.appendchild(script);

		return () => {
			document.body.removechild(script);
		};
	}, []);

	return (
		<div>
			<div
				dangerouslySetInnerHTML={{
					__html: `
          <stripe-buy-button
            buy-button-id="buy_btn_1r0ififg5nxp1asba7sdmvpk"
            publishable-key="pk_live_51r0gqtfg5nxp1asbgtzsqjvcz7j6kpnvxz0fc8n3qffsgnkphdhm1pogh11n0dylmtyq3tzkigzbi61evhcmji6000nxs4k20b"
          ></stripe-buy-button>
        `,
				}}
			/>
		</div>
	);
};

export default StripeButton;
