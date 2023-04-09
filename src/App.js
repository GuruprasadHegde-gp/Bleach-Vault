// 
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
	return (
    <>
		<div className=" font-Poppins bg-heroColor text-white">
      <NavBar/>
			<div className="flex items-center justify-center min-h-screen">
				<h1 className="font-Roboto text-4xl font-extrabold">Your Gateway to Web3 Commerce!"</h1>
			</div>
		</div>
    <Footer/>
    </>
	);
}

export default App;
