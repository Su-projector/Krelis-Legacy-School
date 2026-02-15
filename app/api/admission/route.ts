import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        
        const formId = process.env.NEXT_PUBLIC_FORMSPREE_ADMISSION_ID;
        
        if (!formId) {
            console.error('Formspree form ID not found in environment variables');
            return NextResponse.json(
                { success: false, error: 'Form configuration error' },
                { status: 500 }
            );
        }

        const response = await fetch(`https://formspree.io/f/${formId}`, {
            method: 'POST',
            body: formData,
        });

        const responseText = await response.text();
        console.log('Formspree response status:', response.status);
        console.log('Formspree response:', responseText);

        if (response.ok) {
            return NextResponse.json({ success: true }, { status: 200 });
        } else {
            return NextResponse.json(
                { success: false, error: `Failed to submit form: ${response.status}` },
                { status: response.status }
            );
        }
    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json(
            { success: false, error: 'An error occurred: ' + String(error) },
            { status: 500 }
        );
    }
}
