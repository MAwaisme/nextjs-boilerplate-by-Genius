import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { connectDB } from "../../lib/db";
import User from "../../models/User";

const SECRET = process.env.JWT_SECRET || 'default_secret';

export async function POST(request: Request) {
    const { email, password } = await request.json();

    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
        return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
    }

    const token = jwt.sign({ email: user.email, id: user._id }, SECRET, { expiresIn: '1h' });

    return new Response(JSON.stringify({ token }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}
