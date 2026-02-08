import Button from './Button';

interface HeroSectionProps {
    title: string;
    subtitle?: string;
    description?: string;
    primaryCTA?: {
        text: string;
        href: string;
    };
    secondaryCTA?: {
        text: string;
        href: string;
    };
    backgroundImage?: string;
    overlay?: boolean;
    centered?: boolean;
    height?: 'sm' | 'md' | 'lg' | 'full';
}

export default function HeroSection({
    title,
    subtitle,
    description,
    primaryCTA,
    secondaryCTA,
    backgroundImage,
    overlay = true,
    centered = true,
    height = 'lg',
}: HeroSectionProps) {
    // Height styles
    const heightStyles = {
        sm: 'min-h-[400px]',
        md: 'min-h-[500px]',
        lg: 'min-h-[600px] lg:min-h-[700px]',
        full: 'min-h-screen',
    };

    return (
        <section
            className={`
        relative ${heightStyles[height]} flex items-center
        ${backgroundImage ? '' : 'bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700'}
      `}
            style={
                backgroundImage
                    ? {
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }
                    : undefined
            }
        >
            {/* Gradient Overlay */}
            {overlay && (
                <div
                    className="absolute inset-0 bg-gradient-to-r from-navy-500/95 via-navy-500/80 to-navy-500/60"
                    aria-hidden="true"
                />
            )}

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className={`
        relative z-10 container-max section-padding
        ${centered ? 'text-center' : 'text-left'}
      `}>
                <div className={`max-w-4xl ${centered ? 'mx-auto' : ''}`}>
                    {/* Subtitle/Badge */}
                    {subtitle && (
                        <div className="animate-fade-in-up mb-6">
                            <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold uppercase tracking-wider">
                                {subtitle}
                            </span>
                        </div>
                    )}

                    {/* Title */}
                    <h1
                        className="animate-fade-in-up text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
                        style={{ animationDelay: '0.1s' }}
                    >
                        {title}
                    </h1>

                    {/* Description */}
                    {description && (
                        <p
                            className="animate-fade-in-up text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
                            style={{ animationDelay: '0.2s', ...(centered ? { margin: '0 auto 2rem' } : {}) }}
                        >
                            {description}
                        </p>
                    )}

                    {/* CTA Buttons */}
                    {(primaryCTA || secondaryCTA) && (
                        <div
                            className={`
                animate-fade-in-up flex flex-wrap gap-4
                ${centered ? 'justify-center' : 'justify-start'}
              `}
                            style={{ animationDelay: '0.3s' }}
                        >
                            {primaryCTA && (
                                <Button variant="secondary" size="lg" href={primaryCTA.href}>
                                    {primaryCTA.text}
                                </Button>
                            )}
                            {secondaryCTA && (
                                <Button variant="outline" size="lg" href={secondaryCTA.href} className="border-white text-white hover:bg-white hover:text-navy-500">
                                    {secondaryCTA.text}
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
}

/*
 * Component Notes:
 * ----------------
 * - Props:
 *   - title: Main heading (required)
 *   - subtitle: Badge/tag above title
 *   - description: Paragraph below title
 *   - primaryCTA/secondaryCTA: Button with text and href
 *   - backgroundImage: URL for background image
 *   - overlay: Enable/disable gradient overlay (default: true)
 *   - centered: Center-align content (default: true)
 *   - height: 'sm', 'md', 'lg', 'full'
 * 
 * - Example usage:
 *   <HeroSection
 *     subtitle="Welcome to"
 *     title="Krelis Legacy College"
 *     description="Nurturing future leaders..."
 *     primaryCTA={{ text: 'Apply Now', href: '/admissions' }}
 *     secondaryCTA={{ text: 'Learn More', href: '/about' }}
 *   />
 */
