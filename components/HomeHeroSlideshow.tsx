'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HomeHeroSlideshowProps {
    images: string[];
    interval?: number;
}

export default function HomeHeroSlideshow({
    images,
    interval = 2000,
}: HomeHeroSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="relative w-full h-full overflow-hidden bg-gray-900">
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Optional: Overlay gradient for better text readability if needed */}
            <div className="absolute inset-0 bg-navy-900/10" />
        </div>
    );
}
