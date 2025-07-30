'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Signup: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message || 'Something went wrong');
            localStorage.setItem('token', data.token);
            router.push('/login');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-zinc-900 via-black to-zinc-900 px-4 py-10 space-y-6">

            {/* Welcome Box */}
            <div className="w-full max-w-xl bg-zinc-900 text-white rounded-3xl shadow-xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
                <p className="text-zinc-300">Join us and unlock premium Web3 experiences 🚀</p>
            </div>

            {/* Signup Box */}
            <div className="w-full max-w-xl bg-zinc-950 text-white rounded-3xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-center mb-8">Sign Up</h2> {/* Increased mb */}

                <div className="space-y-8"> {/* Increased space between inputs */}
                    {/* Name Field */}
                    <div className="space-y-2">
                        <label className="block text-sm">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-zinc-600 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label className="block text-sm">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-zinc-600 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <label className="block text-sm">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-zinc-600 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={(e) => handleSubmit(e)}
                        type="submit"
                        className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition"
                    >
                        Sign Up
                    </button>

                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <p className="text-sm text-center">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-400 underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;