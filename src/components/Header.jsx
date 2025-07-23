'use client';

import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="w-full bg-gray-900 text-white shadow-md fixed top-0 left-0 z-50">
            <div className="mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/" className="hover:text-indigo-400 transition duration-300">
                        MyDapp
                    </Link>
                </div>

                {/* Center Navigation + Wallet Button */}
                <div className="flex items-center gap-6">
                    {/* Navigation */}
                    <nav className="flex gap-6">
                        <Link href="/" className="hover:text-indigo-400 transition duration-300">Home</Link>
                        {/* <Link href="/RaydiumStakingComponent" className="hover:text-indigo-400 transition duration-300">Staking</Link> */}
                        <Link href="/raydium-staking-component" className="hover:text-indigo-400 transition duration-300">Staking</Link>
                        <Link href="/contact" className="hover:text-indigo-400 transition duration-300">Contact</Link>
                        <Link href="/staking" className="hover:text-indigo-400 transition duration-300">StakingStaking</Link>
                    </nav>

                    {/* Wallet Button */}
                    <WalletMultiButton className="!bg-indigo-600 !hover:bg-indigo-700 !text-white !font-medium !px-4 !py-2 !rounded-lg !transition !duration-300" />
                </div>
            </div>
        </header>
    );
};

export default Header;