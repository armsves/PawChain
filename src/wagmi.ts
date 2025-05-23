import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
arbitrumSepolia,
mantleSepoliaTestnet,
scrollSepolia
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    arbitrumSepolia,
    mantleSepoliaTestnet,
    scrollSepolia
  ],
  ssr: true,
});
