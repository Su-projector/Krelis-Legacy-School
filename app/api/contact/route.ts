import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        
        const formId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID;
        
        const response = await fetch(`https://formspree.io/f/${formId}`, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            return NextResponse.json({ success: true }, { status: 200 });
        } else {
            return NextResponse.json(
                { success: false, error: 'Failed to submit form' },
                { status: response.status }
            );
        }
    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json(
            { success: false, error: 'An error occurred' },
            { status: 500 }
        );
    }
}
