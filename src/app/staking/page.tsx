'use client';

import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js';
import RaydiumStakingComponent from '@/components/RaydiumStakingComponent';

const Staking: React.FC = () => {
    const { publicKey, signTransaction } = useWallet();
    const connection = new Connection('https://api.devnet.solana.com');

    if (!publicKey || !signTransaction) {
        return <div>Please connect your wallet.</div>;
    }

    return (
        <>
            <RaydiumStakingComponent
                connection={connection}
                walletPublicKey={publicKey}
                signTransaction={signTransaction}
            />
        </>
    );
};

export default Staking;