import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import {  polygonMumbai } from '@wagmi/chains';

const { chains, provider } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID}),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Bleach',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} 
       coolMode theme={darkTheme({
        accentColor: '#121212',
        accentColorForeground: 'white',
        borderRadius: 'none',
        fontStack: 'system',
        overlayBlur: 'small',
      })}
      >
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);


