import bcrypt from 'bcryptjs';
import User from '../../models/User';
import { connectDB } from '../../lib/db';

export async function POST(request: Request) {
    const { email, password } = await request.json();

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });

    return new Response(JSON.stringify({ message: 'User registered successfully' }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
    });
}