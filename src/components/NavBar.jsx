import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from 'react';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between flex-row px-4 py-2">
    {/* Logo */}
    <h1 className=" font-Gothic text-2xl font-bold">3LEACH VAULT</h1>
    <ConnectButton/ >
</div>
  )
}

export default NavBar