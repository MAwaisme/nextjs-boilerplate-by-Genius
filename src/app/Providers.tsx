'use client';

import type React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from '@/utils/wagmi';

// import { config } from '';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}


// ==================================================== For Web3 Auth ==================================================

// "use client";

// import { Web3AuthProvider, type Web3AuthContextConfig } from "@web3auth/modal/react";
// import { IWeb3AuthState, WEB3AUTH_NETWORK } from "@web3auth/modal";
// import { WagmiProvider } from "@web3auth/modal/react/wagmi";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import React from "react";

// const clientId = "BHgArYmWwSeq21czpcarYh0EVq2WWOzflX-NTK-tY1-1pauPzHKRRLgpABkmYiIV_og9jAvoIxQ8L3Smrwe04Lw"; // get from https://dashboard.web3auth.io

// const queryClient = new QueryClient();

// const web3AuthContextConfig: Web3AuthContextConfig = {
//     web3AuthOptions: {
//         clientId,
//         web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
//         ssr: true,
//     }
// };

// export default function Provider({ children, web3authInitialState }:
//     { children: React.ReactNode, web3authInitialState: IWeb3AuthState | undefined }) {
//     return (
//         <Web3AuthProvider config={web3AuthContextConfig} initialState={web3authInitialState}>
//             <QueryClientProvider client={queryClient}>
//                 <WagmiProvider>
//                     {children}
//                 </WagmiProvider>
//             </QueryClientProvider>
//         </Web3AuthProvider>
//     );
// }