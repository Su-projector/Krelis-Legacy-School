import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    title: string;
    description: string;
    image?: string;
    icon?: React.ReactNode;
    href?: string;
    badge?: string;
    variant?: 'default' | 'feature' | 'program' | 'staff';
}

export default function Card({
    title,
    description,
    image,
    icon,
    href,
    badge,
    variant = 'default',
}: CardProps) {
    const CardWrapper = href ? Link : 'div';
    const wrapperProps = href ? { href } : {};

    // Variant-specific styles
    const variantStyles = {
        default: 'bg-white',
        feature: 'bg-gradient-to-br from-white to-gray-50',
        program: 'bg-white border-t-4 border-orange-500',
        staff: 'bg-white text-center',
    };

    return (
        <CardWrapper
            {...(wrapperProps as any)}
            className={`
        group relative overflow-hidden rounded-xl shadow-lg
        hover:shadow-2xl transition-all duration-500
        hover:-translate-y-2
        ${variantStyles[variant]}
        ${href ? 'cursor-pointer' : ''}
      `}
        >
            {/* Image Section */}
            {image && (
                <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}

            {/* Icon Section (for feature cards) */}
            {icon && !image && (
                <div className="pt-8 px-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                </div>
            )}

            {/* Badge */}
            {badge && (
                <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                        {badge}
                    </span>
                </div>
            )}

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-navy-500 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                    {description}
                </p>

                {/* Arrow indicator for linked cards */}
                {href && (
                    <div className="mt-4 flex items-center text-orange-500 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                        Learn more
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Decorative corner accent */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </CardWrapper>
    );
}

/*
 * Component Notes:
 * ----------------
 * - Variants:
 *   - 'default': Standard white card
 *   - 'feature': Gradient background for feature highlights
 *   - 'program': Orange top border for programs
 *   - 'staff': Centered content for staff profiles
 * 
 * - Props:
 *   - title, description: Required text content
 *   - image: Optional image URL (fills top section)
 *   - icon: Optional icon element (for feature cards)
 *   - href: Makes entire card clickable
 *   - badge: Optional badge in top-right corner
 * 
 * - Example usage:
 *   <Card
 *     title="Science Program"
 *     description="Explore our cutting-edge..."
 *     image="/images/science.jpg"
 *     href="/academics#science"
 *     badge="Popular"
 *   />
 */
