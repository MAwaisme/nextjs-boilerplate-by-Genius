import {
    Connection,
    PublicKey,
    TransactionInstruction,
    Transaction,
    sendAndConfirmTransaction,
} from '@solana/web3.js';

type RaydiumStakingParams = {
    connection: Connection;
    walletPublicKey: PublicKey;
    signTransaction: (tx: Transaction) => Promise<Transaction>;
    programId: PublicKey;
    stakeAccount: PublicKey;
    poolAuthority: PublicKey;
    poolLpTokenAccount: PublicKey;
    rewardMint: PublicKey;
    userRewardTokenAccount: PublicKey;
};

export function useRaydiumStaking(params: RaydiumStakingParams) {
    const {
        connection,
        walletPublicKey,
        signTransaction,
        programId,
        stakeAccount,
        poolAuthority,
        poolLpTokenAccount,
        rewardMint,
        userRewardTokenAccount,
    } = params;

    const createInstruction = (ixIndex: number): TransactionInstruction => {
        const data = Buffer.from([ixIndex]);

        const keys = [
            { pubkey: poolAuthority, isSigner: false, isWritable: false },
            { pubkey: stakeAccount, isSigner: false, isWritable: true },
            { pubkey: poolLpTokenAccount, isSigner: false, isWritable: true },
            { pubkey: rewardMint, isSigner: false, isWritable: false },
            { pubkey: userRewardTokenAccount, isSigner: false, isWritable: true },
            { pubkey: walletPublicKey, isSigner: true, isWritable: false },
        ];

        return new TransactionInstruction({
            programId,
            keys,
            data,
        });
    };

    const sendTx = async (instruction: TransactionInstruction) => {
        const tx = new Transaction().add(instruction);
        tx.feePayer = walletPublicKey;
        tx.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;
        const signedTx = await signTransaction(tx);
        const signature = await connection.sendRawTransaction(signedTx.serialize());
        await connection.confirmTransaction(signature, 'confirmed');
        return signature;
    };

    const stake = async () => {
        const ix = createInstruction(0);
        return await sendTx(ix);
    };

    const unstake = async () => {
        const ix = createInstruction(1);
        return await sendTx(ix);
    };

    const harvest = async () => {
        const ix = createInstruction(3);
        return await sendTx(ix);
    };

    return { stake, unstake, harvest };
}