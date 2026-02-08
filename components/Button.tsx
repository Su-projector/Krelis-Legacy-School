import Link from 'next/link';

interface ButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    type = 'button',
    onClick,
    disabled = false,
    className = '',
    ariaLabel,
}: ButtonProps) {
    // Base styles
    const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

    // Variant styles
    const variantStyles = {
        primary: 'btn-primary focus:ring-navy-500',
        secondary: 'btn-secondary focus:ring-orange-500',
        outline: 'btn-outline focus:ring-navy-500',
    };

    // Size styles
    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim();

    // If href is provided, render as Link
    if (href) {
        return (
            <Link
                href={href}
                className={combinedStyles}
                aria-label={ariaLabel}
            >
                {children}
            </Link>
        );
    }

    // Otherwise render as button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedStyles}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

/*
 * Component Notes:
 * ----------------
 * - Variants: 'primary' (navy), 'secondary' (orange), 'outline' (bordered)
 * - Sizes: 'sm', 'md', 'lg'
 * - Can be used as a Link (pass href) or as a button
 * - Includes hover animations, focus states, and disabled styles
 * - Example usage:
 *   <Button variant="secondary" size="lg" href="/admissions">Apply Now</Button>
 *   <Button variant="primary" onClick={handleSubmit}>Submit</Button>
 */
