import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
function App() {
	return (
		<div className="bg-black text-white">
			<div className="flex items-center justify-between flex-row px-4 py-2">
				{/* Logo */}
				<h1 className="text-2xl font-bold">BLEACH VAULT</h1>
				<ConnectButton />
			</div>
			<div className="flex items-center justify-center min-h-screen">
				<h1 className="text-4xl font-extrabold">Your Gateway to Web3 Commerce!"</h1>
			</div>
		</div>
	);
}

export default App;
