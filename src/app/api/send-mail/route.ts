import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '../../Functions/Function_sendGrid'

export async function POST(req: NextRequest) {

    const { name, message, email } = await req.json();

    try {
        sendEmail({ name, message, email });
        return NextResponse.json({ success: true });
    }
    catch (err) {
        
    }
}