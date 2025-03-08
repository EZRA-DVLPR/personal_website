"use client";

const BuyMeACoffeeButton = () => {
	//bc the btn has no script, we dont use any react shenanigans
	return (
		<>
			<a
				href="https://www.buymeacoffee.com/EZRA.DVLPR"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="https://img.buymeacoffee.com/button-api/?text=Buy me a strawberry&emoji=🍓&slug=EZRA.DVLPR&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
					alt="Buy Me a Coffee Button for tips"
					style={{ height: "50px", width: "auto" }}
				/>
			</a>
		</>
	);
};

export default BuyMeACoffeeButton;
