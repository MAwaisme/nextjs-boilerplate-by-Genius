'use client';

import React from 'react';
import { useRaydiumStaking } from '@/hooks/useRaydiumStaking';
import { Connection, PublicKey, Transaction } from '@solana/web3.js';

type Props = {
    connection: Connection;
    walletPublicKey: PublicKey;
    signTransaction: (tx: Transaction) => Promise<Transaction>;
};

const RaydiumStakingComponent: React.FC<Props> = ({
    connection,
    walletPublicKey,
    signTransaction,
}) => {
    const {
        stake,
        unstake,
        harvest
    } = useRaydiumStaking({
        connection,
        walletPublicKey,
        signTransaction,
        
        programId: new PublicKey('DRayWyrLmEW5KEeqs8kdTMMaBabapqagaBC7KWpGtJeZ'),
        stakeAccount: new PublicKey('6N2gAXfPf7U62oBa7ffGp7vH4yUnyZbTNTjMnKqx6HiA'),
        poolAuthority: new PublicKey('FfMbDLnhC7GxVLDDeSLGLDKmrEFXwPyNE5wSxYWEoLVg'),
        poolLpTokenAccount: new PublicKey('7aFPkhxNqtZsH2YbKwqob6kg6Pa4HVrdT3q2DGNbKX7L'),
        rewardMint: new PublicKey('2Zz3UBvU4XzT4Jkj4eCh2GXuAWAKtGhHbrQhWTLQWQ8v'),
        userRewardTokenAccount: new PublicKey('A8PvFuZvb7DWswqfMm5zMdkJnsfdvZo9gZLPLUyo2WBp')
    });

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Raydium Staking</h2>
            <button onClick={stake} className="px-4 py-2 bg-green-600 text-white rounded">
                Stake
            </button>
            <button onClick={unstake} className="px-4 py-2 bg-yellow-500 text-white rounded">
                Unstake
            </button>
            <button onClick={harvest} className="px-4 py-2 bg-purple-600 text-white rounded">
                Harvest
            </button>
        </div>
    );
};

export default RaydiumStakingComponent;
