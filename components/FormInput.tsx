interface FormInputProps {
    id: string;
    name: string;
    label: string;
    type?: 'text' | 'email' | 'tel' | 'number' | 'date' | 'textarea' | 'select';
    placeholder?: string;
    required?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    options?: { value: string; label: string }[];
    rows?: number;
    error?: string;
    hint?: string;
    disabled?: boolean;
    className?: string;
}

export default function FormInput({
    id,
    name,
    label,
    type = 'text',
    placeholder,
    required = false,
    value,
    onChange,
    options = [],
    rows = 4,
    error,
    hint,
    disabled = false,
    className = '',
}: FormInputProps) {
    const baseInputStyles = `
    w-full px-4 py-3 rounded-lg border-2
    transition-all duration-300
    focus:outline-none focus:ring-0
    disabled:bg-gray-100 disabled:cursor-not-allowed
    ${error
            ? 'border-red-400 focus:border-red-500 bg-red-50'
            : 'border-gray-200 focus:border-orange-500 hover:border-gray-300'
        }
  `;

    return (
        <div className={`mb-5 ${className}`}>
            {/* Label */}
            <label
                htmlFor={id}
                className="block text-sm font-semibold text-navy-500 mb-2"
            >
                {label}
                {required && <span className="text-orange-500 ml-1">*</span>}
            </label>

            {/* Input field based on type */}
            {type === 'textarea' ? (
                <textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={onChange}
                    rows={rows}
                    disabled={disabled}
                    className={`${baseInputStyles} resize-none`}
                    aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
                    aria-invalid={!!error}
                />
            ) : type === 'select' ? (
                <select
                    id={id}
                    name={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className={`${baseInputStyles} appearance-none bg-white cursor-pointer`}
                    aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
                    aria-invalid={!!error}
                >
                    <option value="">{placeholder || 'Select an option'}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className={baseInputStyles}
                    aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
                    aria-invalid={!!error}
                />
            )}

            {/* Select dropdown arrow */}
            {type === 'select' && (
                <div className="relative">
                    <div className="absolute right-4 -top-10 pointer-events-none text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            )}

            {/* Error message */}
            {error && (
                <p id={`${id}-error`} className="mt-2 text-sm text-red-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                </p>
            )}

            {/* Hint text */}
            {hint && !error && (
                <p id={`${id}-hint`} className="mt-2 text-sm text-gray-500">
                    {hint}
                </p>
            )}
        </div>
    );
}

/*
 * Component Notes:
 * ----------------
 * - Types supported: text, email, tel, number, date, textarea, select
 * 
 * - For select type, provide options array:
 *   options={[
 *     { value: 'male', label: 'Male' },
 *     { value: 'female', label: 'Female' },
 *   ]}
 * 
 * - error prop: Shows red styling and error message
 * - hint prop: Shows helper text below input
 * - required prop: Adds asterisk to label
 * 
 * - Example usage:
 *   <FormInput
 *     id="email"
 *     name="email"
 *     label="Email Address"
 *     type="email"
 *     placeholder="Enter your email"
 *     required
 *     error={errors.email}
 *   />
 */
