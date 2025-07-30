import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 shadow-md">
            <div className="flex items-center gap-2">
                {/* <Image src="/logo.svg" alt="Logo" width={30} height={30} /> */}
                <h1 className="text-xl font-bold text-orange-500">INFINITY FORCE</h1>
            </div>
            <nav className="flex gap-6">
                <Link href="#">Discover</Link>
                <Link href="#">Ranking</Link>
                <Link href="#">Lending</Link>
            </nav>
            <div className="flex items-center gap-4">
                {/* <button className="text-sm">🌞</button>
                <button className="border px-4 py-1 rounded-md">Connect Wallet</button> */}

                <Link href='/signup'>Sign up</Link>
            </div>
        </header>
    )
}

export default Header
