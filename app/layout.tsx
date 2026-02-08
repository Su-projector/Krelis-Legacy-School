import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Krelis Legacy College - Excellence in Education',
    description: 'Krelis Legacy College is a premier educational institution committed to nurturing future leaders through academic excellence, character development, and innovative learning experiences.',
    keywords: 'Krelis Legacy College, education, school, academics, admissions, college prep',
    openGraph: {
        title: 'Krelis Legacy College - Excellence in Education',
        description: 'Nurturing future leaders through academic excellence and character development.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main className="min-h-screen pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
