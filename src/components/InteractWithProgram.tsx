'use client';

import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { useState } from 'react';
import { Transaction, PublicKey, SystemProgram } from '@solana/web3.js';

const InteractWithProgram = () => {
    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();

    const [targetAddress, setTargetAddress] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInteraction = async () => {
        if (!publicKey) return alert("Connect your wallet");
        if (!targetAddress) return alert("Enter a target address");

        let recipient: PublicKey;
        try {
            recipient = new PublicKey(targetAddress);
        } catch (error) {
            return alert("Invalid public key format");
        }

        try {
            setLoading(true);

            const instruction = SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: recipient,
                lamports: 10000, // ~0.00001 SOL
            });

            const transaction = new Transaction().add(instruction);
            const signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'processed');

            alert("Transaction confirmed: " + signature);
        } catch (error) {
            console.error(error);
            alert("Transaction failed: " + (error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 space-y-4">
            <input
                type="text"
                value={targetAddress}
                onChange={(e) => setTargetAddress(e.target.value)}
                placeholder="Enter Solana address"
                className="w-full p-2 border rounded"
            />

            <button
                onClick={handleInteraction}
                disabled={!publicKey || loading}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
                {loading ? 'Sending...' : 'Send to Address'}
            </button>
        </div>
    );
};

export default InteractWithProgram;
