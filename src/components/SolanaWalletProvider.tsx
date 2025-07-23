// src/app/Providers/SolanaProvider.tsx
'use client';

import { FC, ReactNode, useMemo } from 'react';
import {
    ConnectionProvider,
    WalletProvider
} from '@solana/wallet-adapter-react';
import {
    PhantomWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

require('@solana/wallet-adapter-react-ui/styles.css');

export const SolanaProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const network = 'devnet'; // Can be 'mainnet-beta', 'testnet', or 'devnet'
    const endpoint = useMemo(() => `https://api.${network}.solana.com`, [network]);

    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};